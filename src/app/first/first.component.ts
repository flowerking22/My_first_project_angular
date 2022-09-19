import { Component, OnInit } from '@angular/core';
import { Routestatus } from '../third/third.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  Datel = new Date();

  constructor() { }

  ngOnInit(): void {
    alert(Routestatus.routeFlag);
  }

}
