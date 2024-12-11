import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";
import { ModalGameComponent } from "../modal-game/modal-game.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    CardLabelComponent, CardPricingComponent, ModalGameComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = ""
  @Input()
  gameLabel: string = ""
  @Input()
  gameType: string = "XPTO | PS4"
  @Input()
  gamePrice: string = "R$ 399,90"

  // Variáveis para o Modal
  modalGameType: string = "";
  modalGameCover: string = "";
  modalGameLabel: string = "";
  modalGamePrice: string = "";
  isModalVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  openModal(gameType: string, gameCover: string, gameLabel: string, gamePrice: string): void {
    this.isModalVisible = false;
    // como faco esperar um tempo pra depois executar o paso seguinte
    setTimeout(() => {
      console.log('game');
      this.isModalVisible = true;
      this.modalGameType = gameType;
      this.modalGameCover = gameCover;
      this.modalGameLabel = gameLabel;
      this.modalGamePrice = gamePrice;
    }, 10);
  }

}
