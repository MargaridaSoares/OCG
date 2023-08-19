import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NavBarButtonComponent } from './components/nav-bar-button/nav-bar-button.component';
import { NavBarDropDownComponent } from './components/nav-bar-drop-down/nav-bar-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    NavBarButtonComponent,
    NavBarDropDownComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomePageComponent},
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }