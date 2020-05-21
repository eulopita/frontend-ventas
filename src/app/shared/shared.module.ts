import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AreaComponent, CardComponent, PieComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ], 
  exports: [
    MaterialModule,
    FlexLayoutModule
  ]

})
export class SharedModule { }
