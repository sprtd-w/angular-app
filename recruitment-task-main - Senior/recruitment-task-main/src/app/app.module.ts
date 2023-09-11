import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightSideListComponent } from './pages/home/components/right-side-list/right-side-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './pages/home/components/post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './pages/login/login.component';
import { AppStateService } from './core/services/app-state.service';
import { AppResolverService } from './core/services/app-resolver.service';
import { AlertComponent } from './shared/alert/alert.component';
import { JwtInterceptor } from './core/services/jwt.interceptor';

export function tokenGetter(): string | null {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  return currentUser.token;
}

@NgModule({
  declarations: [
    AppComponent,
    RightSideListComponent,
    FooterComponent,
    HeaderComponent,
    PostFormComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [
    AppStateService,
    AppResolverService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
