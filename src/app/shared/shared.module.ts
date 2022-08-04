import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonLinkComponent } from './button-link/button-link.component';


@NgModule({
  declarations: [ButtonLinkComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [CommonModule,
    ButtonLinkComponent]
})
export class SharedModule { }
