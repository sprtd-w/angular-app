import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactFormEmailComponent } from './components/contact-form-email/contact-form-email.component';
import { ContactFormMessageComponent } from './components/contact-form-message/contact-form-message.component';
import { PostsService } from "./services/contacts.service";



@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactFormEmailComponent,
    ContactFormMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  providers: [PostsService]
})
export class ContactModule { }
