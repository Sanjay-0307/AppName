import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RegisterPage } from './register-page/register-page';
import { LoginPage } from './login-page/login-page';
import { FormsModule } from '@angular/forms';
import { Homepage } from './homepage/homepage';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    RegisterPage,
    LoginPage
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Homepage
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
