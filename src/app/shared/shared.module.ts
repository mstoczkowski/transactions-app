import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbUIModule } from './modules/bb-ui/bb-ui.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TileComponent } from './components/tile/tile.component';
import { FormFieldComponent } from './components/input/form-field.component';
import { ModalComponent } from './components/modal/modal.component';
import { TrustHtmlPipe } from './pipes/trust-html.pipe';


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
    TileComponent,
    FormFieldComponent,
    ModalComponent,
    TrustHtmlPipe
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, TileComponent, FormFieldComponent, ModalComponent, TrustHtmlPipe]
})
export class SharedModule { }
