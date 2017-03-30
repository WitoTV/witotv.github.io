import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  title = 'Contact works!';

  constructor() { }

  public ngOnInit(): void {}
}
