import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RouterTab } from '../../../share/types/router-tab.type';

@Component({
    selector: 'app-dashboard-tabs',
    templateUrl: './tabs.component.html'
})

export class TabViewComponent implements OnInit {

    public items: RouterTab[];

    constructor(private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        if (typeof this.route.routeConfig.data['tabs'] === 'undefined') {
            throw new Error('Tab view component require tabs');
        }

        this.items = this.route.routeConfig.data['tabs'];
    }
}
