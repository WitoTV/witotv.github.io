
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [],
  imports: [
    ShareModule,
    BrowserModule,
    RouterModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
