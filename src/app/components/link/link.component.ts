import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  text:string;
  @Input() href:string;
  @Input() placeholder:string;
  constructor() { }
  ngOnInit() {
  
  }

}
