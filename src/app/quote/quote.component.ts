import { Component, OnInit, Input } from '@angular/core';

import { Quote } from "../quote.interface";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  //@Input() so can set from outside and bind in quotes.component.html in *ngFor
  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}