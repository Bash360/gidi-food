import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-restuarant-card',
  templateUrl: './restuarant-card.component.html',
  styleUrls: ['./restuarant-card.component.css']
})
export class RestuarantCardComponent implements OnInit {
  @Input() src:string;
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
