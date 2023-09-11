import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { checkMessageLengthFn } from "../contact-form-message/contact-form-message.component";
import { PostsService } from "../../services/contacts.service";
import { ContactMessageModel } from "../../../../model/contact-message.model";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm = this.fb.group({
    email: '',
    message: ['', checkMessageLengthFn()],
  });

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
  ) {}

  ngOnInit() {
  }

  submit(): void {
    this.postsService.sendMessage(this.contactForm.value as ContactMessageModel)
      .subscribe(() => this.contactForm.reset());
  }

  get email() {
    return this.contactForm.get('email') as FormControl;
  }

  get message() {
    return this.contactForm.get('message') as FormControl;
  }

}
