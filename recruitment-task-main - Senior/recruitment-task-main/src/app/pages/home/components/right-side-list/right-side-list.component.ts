import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from '../../../../model/post.model';
import { StateKeysEnum } from '../../../../model';
import { PostsStateService } from '../../services/posts-state.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-right-side-list',
  templateUrl: './right-side-list.component.html',
  styleUrls: ['./right-side-list.component.scss']
})
export class RightSideListComponent implements OnInit {
  items: PostModel[] = [];

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private postsState: PostsStateService
  ) {}
  ngOnInit(): void {
    this.postsState.state$.subscribe(state => {
      this.items = state[StateKeysEnum.posts];
    });
  }

  onItemClick(postId: number): void {
    this.router.navigate(['/post/edit', postId]);
  }

  navigateToAddForm(): void {
    this.router.navigate(['/post/new']);
  }

  deletePost(postId: number): void {
    this.postsState.deletePost(postId)
      .pipe(switchMap(() => this.postsState.getPosts()))
      .subscribe(null);
  }

}
