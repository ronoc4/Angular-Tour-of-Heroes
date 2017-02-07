import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent }  from './hero.component';
import  { HeroDetailComponent } from './hero-detail.component';
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";

@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
