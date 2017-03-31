import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio.component.pug',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio works!';

  constructor() { }

  public ngOnInit(): void {}
}
