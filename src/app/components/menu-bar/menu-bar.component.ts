import { Component } from '@angular/core';
import { MenuLogoComponent } from "./menu-logo/menu-logo.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    CommonModule,
    MenuLogoComponent,
    MenuItemComponent
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  dados = [
    { link: 'https://www.youtube.com/', nome: 'Youtube' },
    { link: 'https://www.linkedin.com/in/edson-sousa-evangelista/', nome: 'LinkedIn' },
    { link: 'https://github.com/Sousa-Edson', nome: 'Git Hub' },
    { link: 'https://sousa-edson.github.io/portfolio/home', nome: 'Contato' }
  ];

}
