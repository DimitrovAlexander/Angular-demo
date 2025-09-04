import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header"

@Component({
  selector: 'app-public-layout',
  imports: [CommonModule,RouterOutlet,HeaderComponent],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}
