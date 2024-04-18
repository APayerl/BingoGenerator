import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorChromeModule } from "ngx-color/chrome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexBoardComponent } from './flex-board/flex-board.component';
@NgModule({
    declarations: [
        AppComponent,
        FlexBoardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ColorChromeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
