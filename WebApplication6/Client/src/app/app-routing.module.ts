import { SomecomponentComponent } from './somecomponent/somecomponent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: 'Default.aspx', component: SomecomponentComponent },
  //{ path: 'About.aspx', component: SomecomponentComponent },
  { path: 'default', component: SomecomponentComponent },
  { path: 'about', component: SomecomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
