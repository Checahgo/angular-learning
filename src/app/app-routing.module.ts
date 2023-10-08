import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'contact-form', component: ContactFormComponent },
  { path: '**', redirectTo: 'contact-form'},
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
