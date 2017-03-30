import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingConfig } from './page.routing';

import { TabViewComponent } from '../share/tabs/tabs.component';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    KnowledgeComponent,
    PortfolioComponent,
    ContactComponent,
    KnowledgeComponent
  ],
  imports: [
    RouterModule.forRoot(RoutingConfig)
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    KnowledgeComponent,
    PortfolioComponent,
    ContactComponent,
    KnowledgeComponent
  ],
  providers: []
})
export class PageModule { }
