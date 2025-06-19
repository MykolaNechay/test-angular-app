import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { PostService } from '../../services/post/post.service';
import { BehaviorSubject, catchError, Observable, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-list-container-component',
  standalone: false,
  templateUrl: './user-list-container.component.html',
  styleUrl: './user-list-container.component.css'
})
export class UserListContainerComponent implements OnInit {
  private selectedUserIdSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  users$!: Observable<any[]>;
  posts$!: Observable<any[]>;
  selectedUserId$: Observable<string> = this.selectedUserIdSubject$.asObservable();

  constructor(private userService: UserService, private postService: PostService) {
    this.posts$ = this.selectedUserIdSubject$
      .pipe(
        switchMap(userId => {
          if (!userId) {
            return of([])
          }
          return this.postService.getByUserId(userId).pipe(
            catchError(err => {
              console.error('Error fetching post by user id:', err);
              return of([]);
            }),
            startWith([])
          );
        }),
      )
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  onToggle(user: any): void {
    const currentId = this.selectedUserIdSubject$.value;
    const newValue = currentId === user.id ? '' : user.id;
    this.selectedUserIdSubject$.next(newValue);
  }
}
