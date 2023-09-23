import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'contact-form', component: ContactFormComponent },
  { path: '**', redirectTo: 'contact-form'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
