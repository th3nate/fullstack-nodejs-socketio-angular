import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NavModule} from '../nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NavModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
