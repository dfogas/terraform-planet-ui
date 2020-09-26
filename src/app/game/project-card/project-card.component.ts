import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {
    public price = 3;
    public title = 'Search for life';

    ngOnInit(): void {
    }

}
