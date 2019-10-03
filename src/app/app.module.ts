import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkComponent } from './components/link/link.component';
import { RestuarantCardComponent } from './components/restuarant-card/restuarant-card.component';
import { ProcessCardComponent } from './components/process-card/process-card.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    RestuarantCardComponent,
    ProcessCardComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
