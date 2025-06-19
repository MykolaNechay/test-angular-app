import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserListContainerComponent } from './components/user-list-container/user-list-container.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [UserListContainerComponent, PostListComponent, UserComponent],
  imports: [
    CommonModule
  ],
  exports: [UserListContainerComponent],
})
export class UserListModule { }
