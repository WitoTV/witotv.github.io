import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-dashboard-tabs',
    templateUrl: './tabs.component.html'
})
export class TabViewComponent implements OnInit {
    public items: any;

    constructor(private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        if (typeof this.route.routeConfig.data['tabs'] === 'undefined') {
            throw new Error('Tab view component require tabs');
        }

        this.items = this.route.routeConfig.data['tabs'];
    }
}
