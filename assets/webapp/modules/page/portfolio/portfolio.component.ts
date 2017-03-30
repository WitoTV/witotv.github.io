import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio works!';

  constructor() { }

  public ngOnInit(): void {}
}
