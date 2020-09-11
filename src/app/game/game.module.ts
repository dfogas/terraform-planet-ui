import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';

import {GameRoutingModule} from './game-routing.module';
import {GameComponent} from './game.component';
import {HexGridComponent} from './hex-grid/hex-grid.component';
import {ProjectsBuiltComponent} from './projects-built/projects-built.component';

@NgModule({
    declarations: [GameComponent, HexGridComponent, ProjectsBuiltComponent],
    exports: [
        GameComponent,
        ProjectsBuiltComponent
    ],
    imports: [
        CommonModule,
        GameRoutingModule,
        MatGridListModule
    ]
})
export class GameModule {
}
