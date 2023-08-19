import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  titleLabel: string = 'Grading';
  optionsList: {label: string, path: string}[] = [{label:'Sports Cards', path:'/sportsCards'},
                                                       {label:'Non-Sports Cards', path:'/nonSportsCards'},
                                                       {label:'Gaming Cards', path:'/gamingCards'},
                                                       {label:'Comics', path:'/comics'}];

}
