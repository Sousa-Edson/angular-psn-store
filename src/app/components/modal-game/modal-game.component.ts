import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "../card/card-label/card-label.component";
import { CardPricingComponent } from "../card/card-pricing/card-pricing.component";
import { ButtonCloseComponent } from "./button-close/button-close.component";

@Component({
  selector: 'app-modal-game',
  standalone: true,
  imports: [
    CommonModule,
    CardLabelComponent,
    CardPricingComponent,
    ButtonCloseComponent
],
  templateUrl: './modal-game.component.html',
  styleUrl: './modal-game.component.scss'
})
export class ModalGameComponent {

  @Input()
  gameCover: string = ""
  @Input()
  gameLabel: string = ""
  @Input()
  gameType: string = "XPTO | PS4"
  @Input()
  gamePrice: string = "R$ 399,90"
  @Input() isVisible: boolean = false;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
