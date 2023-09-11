import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostFormComponent} from "./pages/home/components/post-form/post-form.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {LoginComponent} from "./pages/login/login.component";
import { AppResolverService } from './core/services/app-resolver.service';
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: { data: AppResolverService }
  },
  { path: 'login', component: LoginComponent },  { path: 'about', component: AboutComponent },
  { path: 'post/new', component: PostFormComponent },
  { path: 'post/edit/:id', component: PostFormComponent },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
