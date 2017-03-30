import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
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
