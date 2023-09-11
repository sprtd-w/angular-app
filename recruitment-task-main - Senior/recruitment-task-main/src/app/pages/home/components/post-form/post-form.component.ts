import { Component, OnDestroy, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { PostsStateService } from '../../services/posts-state.service';
import { PostModel } from '../../../../model/post.model';
import { FormGroup, FormControl } from "@angular/forms";
import { iif, map, of, Subject, switchMap, takeUntil } from "rxjs";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnDestroy {
  mode: 'Add' | 'Edit' = 'Add';

  postForm: FormGroup = new FormGroup<any>({});
  post: Partial<PostModel> = this.postInitial;

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsStateService: PostsStateService,
  ) {}

  get postInitial(): Partial<PostModel> {
    return { title: '', body: '' };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.mode = id ? 'Edit' : 'Add';
    this.formInit(this.postInitial);

    of(id)
      .pipe(
        switchMap(() => {
          return iif(() => (!!id), this.postsStateService.getPost(parseInt(id, 10)), of(this.postInitial));
        }),
        map(postData => this.formInit(postData as Partial<PostModel>)),
        switchMap(() => this.postForm.valueChanges),
        switchMap(formData => {
          return iif(() => this.mode === 'Edit',
            this.postsStateService.updatePost(formData),
            this.postsStateService.addPost(formData))
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.closeAction());
  }

  closeAction(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private formInit(post: Partial<PostModel> = this.postInitial) {
    this.postForm = new FormGroup({
      title: new FormControl(post?.title),
      body: new FormControl(post?.body),
      id: new FormControl(post?.id)
    }, { updateOn: 'submit' });
  }

}
