import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  entryComponents:[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  recipe = new Recipe('Dummy','Dummy','https://www.google.lk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiCsLXRk4XTAhVHtJQKHR-KDXUQjRwIBw&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fmannequin&bvm=bv.151325232,d.dGo&psig=AFQjCNHxoeEg5GzycPB-r9lCRJCKcfgF6g&ust=1491201226407071');

  constructor() { }

  ngOnInit() {
  }

}
