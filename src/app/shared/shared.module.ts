import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbUIModule } from './modules/bb-ui/bb-ui.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  imports: [
    CommonModule,
    BbUIModule
  ],
  exports: [
    BbUIModule,

    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, CardComponent]
})
export class SharedModule { }
