import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { HelloComponent } from './hello.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


@NgModule({
  imports:      
    [ BrowserModule, 
      FormsModule,
      AppRoutingModule
    ],
  declarations: 
    [ AppComponent, 
      HelloComponent, 
      // CrisisListComponent, 
      // HeroListComponent,
      // PageNotFoundComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
