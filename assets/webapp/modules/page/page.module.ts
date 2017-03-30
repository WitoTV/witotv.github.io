import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingConfig } from './page.routing';

import { TabViewComponent } from '../share/tabs/tabs.component';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

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
