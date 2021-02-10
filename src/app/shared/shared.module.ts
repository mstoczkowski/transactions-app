import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbUIModule } from './modules/bb-ui/bb-ui.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    BbUIModule
  ],
  exports: [
    BbUIModule,

    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class SharedModule { }
