import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-wallet [wallet]',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  @Input()
  wallet!: Wallet;

  @Input()
  selected: boolean = false;

  @Input()
  displayOnly: boolean = false;

  @Output()
  editClickEmitter = new EventEmitter<Wallet>();

  handleEditClick() {
    this.editClickEmitter.emit(this.wallet);
  }

  ngOnInit() {}
}
