import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  title = 'About works!';

  constructor() { }

  public ngOnInit(): void {}
}
