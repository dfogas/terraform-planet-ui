import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';

import {GameRoutingModule} from './game-routing.module';
import {GameComponent} from './game.component';
import {HexGridComponent} from './hex-grid/hex-grid.component';
import {ProjectsBuiltComponent} from './projects-built/projects-built.component';
import {ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
    declarations: [GameComponent, HexGridComponent, ProjectsBuiltComponent, ProjectCardComponent],
    exports: [
        GameComponent,
        ProjectsBuiltComponent,
        ProjectCardComponent
    ],
    imports: [
        CommonModule,
        GameRoutingModule,
        MatGridListModule
    ]
})
export class GameModule {
}
