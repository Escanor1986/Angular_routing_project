import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User } from '../../shared/interfaces/user.interface';
@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})

/** 
 * The users component.
 * @class
 * @implements {OnInit}
   */
export class UsersComponent implements OnInit {
  public users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bob' },
  ];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('Users component initialized...');
  }

  /**
   * Redirects to the user page.
   * @param user The user object.
   * @returns void
   * @example
   * redirection({ id: 1, name: 'John Doe' });
   * Redirects to the user page with the query params, fragment, etc...
  */
  public redirection(user: User): void {
    console.log(user);
    this.router.navigate(['/users', user.id], {
      relativeTo: this.activatedRoute,
      queryParams: { name: user.name },
      fragment: 'user',
      // To retrieve the query params from the parent route.
      queryParamsHandling: 'merge',
    });
  }
}
