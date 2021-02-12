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
import { ElementColorDirective } from './directives/element-color.directive';
import { PriceComponent } from './components/price/price.component';
import { FilterPipe } from './pipes/filter.pipe';


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
    TrustHtmlPipe,
    ElementColorDirective,
    PriceComponent,
    FilterPipe
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, TileComponent, FormFieldComponent, ModalComponent, TrustHtmlPipe, ElementColorDirective, PriceComponent, FilterPipe]
})
export class SharedModule { }
