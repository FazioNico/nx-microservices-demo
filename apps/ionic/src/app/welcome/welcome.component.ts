import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-micro-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {

  public title = 'Ionic Platform';

  constructor() { }

  ngOnInit() {
  }

}
