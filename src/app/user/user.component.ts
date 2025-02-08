import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  public id: string | null = null;
  public name: string | null = null;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('User component initialized...');
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log(params.get('id'));
    });

    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
      console.log(params.get('name'));
    });

    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
     return fragment ? console.log(fragment) : null;
    });
  }
}
