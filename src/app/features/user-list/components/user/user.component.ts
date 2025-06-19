import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-component',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: any;
}
