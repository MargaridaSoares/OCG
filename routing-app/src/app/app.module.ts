import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NavBarButtonComponent } from './components/nav-bar-button/nav-bar-button.component';
import { NavBarDropDownComponent } from './components/nav-bar-drop-down/nav-bar-drop-down.component';
import { NavBarSearchFormComponent } from './components/nav-bar-search-form/nav-bar-search-form.component';
import { HomePageCarouselComponent } from './components/home-page-carousel/home-page-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    NavBarButtonComponent,
    NavBarDropDownComponent,
    NavBarSearchFormComponent,
    HomePageCarouselComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomePageComponent},
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
