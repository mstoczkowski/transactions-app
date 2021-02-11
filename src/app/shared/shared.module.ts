import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbUIModule } from './modules/bb-ui/bb-ui.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { FormFieldComponent } from './components/input/form-field.component';


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
    CardComponent,
    FormFieldComponent
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, CardComponent, FormFieldComponent]
})
export class SharedModule { }
