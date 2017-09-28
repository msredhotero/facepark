import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstacionamientoPage } from './estacionamiento';

@NgModule({
  declarations: [
    EstacionamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstacionamientoPage),
  ],
})
export class EstacionamientoPageModule {}
