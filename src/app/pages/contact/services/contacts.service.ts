import { Injectable } from "@angular/core";
import { HttpService } from "../../../core/services/http.service";
import { Observable } from "rxjs";
import { ContactMessageModel } from "../../../model/contact-message.model";

@Injectable()
export class PostsService extends HttpService {
  apiUrlContacts = this.apiUrl + 'contacts';

  sendMessage(contactMessage: ContactMessageModel): Observable<ContactMessageModel> {
    return this.http.post<ContactMessageModel>(`${this.apiUrlContacts}`, contactMessage);
  }
}
