import { Component } from '@angular/core';
@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor(){
    this.jbtHeading = "Hello World";
    this.jbtText = "This is a simple hero unit. There's meant to be a fair amount of text in here, but it basically ends when I get too lazy to type anym";
    this.jbtBtnText = "Read More";
    this.jbtBtnUrl = "/about";

  }
}
