import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  entryComponents:[RecipeListComponent]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
