import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  entryComponents:[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dummy','Dummy','https://thumb7.shutterstock.com/display_pic_with_logo/2312339/398527027/stock-photo-full-length-female-mannequin-dressed-in-yellow-dress-isolated-on-white-background-398527027.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
