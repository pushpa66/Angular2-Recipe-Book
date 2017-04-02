import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {RecipesComponent} from "./recipes/recipes.component";

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  entryComponents: [HeaderComponent,RecipesComponent]
})
export class AppComponent {

}
