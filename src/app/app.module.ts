import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameRoutingModule} from './game/game-routing.module';
import {GameModule} from './game/game.module';
import { AngularInfoComponent } from './angular-info/angular-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        AngularInfoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GameRoutingModule,
        GameModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
