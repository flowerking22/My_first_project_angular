import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() name = 'I AM in second';
  Datel = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
