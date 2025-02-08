import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: Page404Component },
];
