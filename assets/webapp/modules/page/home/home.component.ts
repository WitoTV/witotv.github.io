import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  title = 'Home works!';

  constructor() { }

  public ngOnInit(): void {}
}