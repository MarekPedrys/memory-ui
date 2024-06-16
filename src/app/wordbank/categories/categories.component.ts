import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIcon} from "@ng-icons/core";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    RouterLink,
    NgIcon
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}
