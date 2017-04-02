import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from "./shopping-list-add.component";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  entryComponents:[ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
