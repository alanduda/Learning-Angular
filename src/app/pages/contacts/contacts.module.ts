import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent }
]

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class ContactsModule { }
