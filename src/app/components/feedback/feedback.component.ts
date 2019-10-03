import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
 @Input() feedback:string;
 @Input() customerName:string;
  constructor() { }

  ngOnInit() {
  }

}
