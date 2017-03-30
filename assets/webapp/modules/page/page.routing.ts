import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { TabViewComponent } from '../share/tabs/tabs.component';

export const RoutingConfig = [
      {
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'knowledge',
            component: KnowledgeComponent
          },
          {
            path: 'portfolio',
            component: PortfolioComponent
          },
          {
            path: 'contact',
            component: ContactComponent
          },
          {
            path: '**',
            redirectTo: ''
          },
        ],
        path: '',
        component: TabViewComponent,
        data: {
          tabs: [
            {
              label: 'Home',
              routerLink: ['']
            },
            {
              label: 'About',
              routerLink: ['/about']
            },
            {
              label: 'Knowledge',
              routerLink: ['/knowledge']
            },
            {
              label: 'Portfolio',
              routerLink: ['/portfolio']
            },
            {
              label: 'Contact',
              routerLink: ['/contact']
            }
          ]
        }
      }
    ];
