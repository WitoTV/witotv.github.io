import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.pug',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  title = 'About works!';

  constructor() { }

  public ngOnInit(): void {}
}
