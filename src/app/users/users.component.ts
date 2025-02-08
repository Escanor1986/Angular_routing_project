import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../shared/interfaces/user.interface';
@Component({
  selector: 'app-users',
  imports: [RouterLink, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  public users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bob' },
  ];

  constructor() {}

  ngOnInit() {
    console.log('Users component initialized...');
  }
}
