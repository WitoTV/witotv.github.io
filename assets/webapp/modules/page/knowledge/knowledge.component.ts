import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KnowledgeComponent implements OnInit {
  title = 'Knowledge works!';

  constructor() { }

  public ngOnInit(): void {}
}
