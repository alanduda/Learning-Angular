import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsUrl: string = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<any[]>(this.contactsUrl);
  }
}
