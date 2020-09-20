import {NgModule} from '@angular/core';
import {NavComponent} from './nav.component';
import {MaterialModule} from '../@shared/material.module';

@NgModule({
  declarations: [NavComponent],
  imports     : [MaterialModule],
  exports     : [NavComponent]
})
export class NavModule {
}
