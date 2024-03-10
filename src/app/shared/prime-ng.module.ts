import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    TagModule,
    RatingModule,
    ButtonModule,
    MultiSelectModule,
    SliderModule,
    StyleClassModule,
    InputTextModule,
  ],
  exports: [
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    TagModule,
    RatingModule,
    ButtonModule,
    MultiSelectModule,
    SliderModule,
    StyleClassModule,
    InputTextModule,
  ],
})
export class PrimeNgModule {}
