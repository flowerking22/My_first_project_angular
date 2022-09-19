import { Component, OnInit } from '@angular/core';
export class Routestatus {
  static routeFlag = false;
}
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  Datel = new Date();
  constructor() { }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }


  ngOnInit(): void {
  }

}
