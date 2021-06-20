import { ContactsService } from './services/contacts.service';
import { ContactsModule } from './pages/contacts/contacts.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: 'contacts', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    //Modules Pages
    FormsModule,
    ContactsModule,
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
