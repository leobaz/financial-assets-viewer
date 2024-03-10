import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule, RouterModule],
  exports: [CommonModule, PrimeNgModule, RouterModule],
})
export class SharedModule {}
