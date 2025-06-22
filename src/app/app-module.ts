import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RegisterPage } from './register-page/register-page';
import { LoginPage } from './login-page/login-page';
import { FormsModule } from '@angular/forms';
import { Homepage } from './homepage/homepage';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    LoginPage,
    Parent,
    Child,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Homepage,
    MatTableModule,
    RegisterPage,
    MatIconModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
