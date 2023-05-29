import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletsPageRoutingModule } from './wallets-routing.module';

import { WalletsPage } from './wallets.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModifyComponent } from './modify/modify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [WalletsPage, ModifyComponent],
})
export class WalletsPageModule {}
