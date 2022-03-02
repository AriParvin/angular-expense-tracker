import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BriefingCardsComponent } from './expenses/briefing-cards/briefing-cards.component';
import { ExpenseListComponent } from './expenses/expense-list/expense-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BriefingCardsComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
