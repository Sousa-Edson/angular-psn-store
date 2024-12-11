import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  games = [
    { gameCover: 'assets/ac-cover.jpg', gameLabel: 'BEST OF YEAR', gameType: 'DIGITAL | PS5', gamePrice: 'R$ 369,99' },
    { gameCover: 'assets/bt-1.jpg', gameLabel: '', gameType: 'DIGITAL | PS4', gamePrice: 'R$ 129,99' },
    { gameCover: 'assets/bt-4.jpg', gameLabel: 'EXCLUSIVE', gameType: 'DISC | PS5', gamePrice: 'R$ 269,99' },
    { gameCover: 'assets/bt-5.jpg', gameLabel: '', gameType: 'DISC | PS5', gamePrice: 'R$ 289,99' },
    { gameCover: 'assets/bt-bad-company-2.jpg', gameLabel: 'BEST OF YEAR', gameType: 'DIGITAL | PS5', gamePrice: 'R$ 89,99' },
    { gameCover: 'assets/bt-hardline.jpg', gameLabel: 'NEW', gameType: 'DIGITAL | PS3 PS4 PS5', gamePrice: 'R$ 369,99' },
  ];
}
