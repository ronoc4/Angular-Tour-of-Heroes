import { NgModule }       from '@angular/core';
import {HttpModule}       from "@angular/http";
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { AppRoutingModule }     from './app-routing.module';
import {HeroSearchComponent}    from './hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],

  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
