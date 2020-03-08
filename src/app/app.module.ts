import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SelectbeverageComponent } from './components/dialogue/selectbeverage/selectbeverage.component';
import { TheusualComponent } from './components/dialogue/theusual/theusual.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    SelectbeverageComponent,
    TheusualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
