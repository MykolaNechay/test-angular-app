import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() posts!: any[];
}
