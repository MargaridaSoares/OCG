import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-drop-down',
  templateUrl: './nav-bar-drop-down.component.html',
  styleUrls: ['./nav-bar-drop-down.component.css']
})
export class NavBarDropDownComponent {
  @Input() titleLabel: string = '';
  @Input() optionsList: {label: string, path: string}[] = [{label:'', path:''}];

}
