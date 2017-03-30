import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabViewComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [TabViewComponent],
  imports: [
      RouterModule,
      CommonModule
  ],
  exports: [
    CommonModule,
    TabViewComponent,
  ],
  providers: []
})
export class ShareModule {}
