import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true } )  
  ],
  declarations: [
      CrisisListComponent, 
      HeroListComponent,
      PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
