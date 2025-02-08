import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  constructor(private readonly router: Router) { 
    this.router = router;
  }

  ngOnInit() {
    console.log('Homepage component initialized...');
    console.log(this.router);
  }

  public redirection() {
    this.router.navigateByUrl('users');
    console.log('Redirecting to users page...');
  }
}
