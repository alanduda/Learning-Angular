import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'forms', component: FormsComponent }
]

@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FormsModule { }
