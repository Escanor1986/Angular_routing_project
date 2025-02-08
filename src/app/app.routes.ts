import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { Page404Component } from './page404/page404.component';
import { UserComponent } from './user/user.component';

/**
 * The routes of the application.
 * @type {Routes}
 */
export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id', component: UserComponent }],
  },
  { path: '**', component: Page404Component },
];
