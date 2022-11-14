import {BrowserModule} from '@angular/platform-browser';
import {ClipboardModule} from "ngx-clipboard";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {ToastrModule} from "ngx-toastr";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {InsultGeneratorComponent} from './components/insult-generator/insult-generator.component';
import {InsultService} from "./services/insult.service";
import {ScreenshotRendererComponent} from './components/screenshot-renderer/screenshot-renderer.component';
import {SnapshotService} from "./services/snapshot.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {KretaInsultToasterService} from "./services/kreta-insult-toaster.service";
import { FooterComponent } from './components/footer/footer.component';
import { WhatIsThisComponent } from './components/what-is-this/what-is-this.component';

@NgModule({
  declarations: [
    AppComponent,
    InsultGeneratorComponent,
    ScreenshotRendererComponent,
    FooterComponent,
    WhatIsThisComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      autoDismiss: true,
      preventDuplicates: true,
      positionClass: "toast-bottom-center"
    })
  ],
  providers: [
    InsultService,
    KretaInsultToasterService,
    SnapshotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
