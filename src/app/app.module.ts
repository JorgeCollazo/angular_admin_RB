/* Angular imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Third-party imports */
import { MaterialModule } from './material/material.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

/* Project imports */

import { AuthModule } from './auth/auth.module';
import { NavigationComponent } from '../app/layout/navigation/navigation.component';
import { RegisterComponent } from './auth/register/register.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SublevelMenuComponent } from './layout/sidenav/sublevel-menu.component';
import { SecurityModule } from './security/security.module';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptorInterceptor } from './auth/auth-interceptor.interceptor';
import { LottieAnimComponent } from './shared/lottie-anim/lottie-anim.component';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    SidenavComponent,
    SublevelMenuComponent,
    LottieAnimComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    MaterialModule,
    SecurityModule,
    SharedModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
