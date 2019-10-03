import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.css']
})
export class ProcessCardComponent implements OnInit {
   @Input() instruction:string;
   @Input() detailedInstruction:string;
  constructor() { }

  ngOnInit() {
  }

}
