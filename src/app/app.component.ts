import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ScreenshotRendererComponent} from "./components/screenshot-renderer/screenshot-renderer.component";
import {InsultService} from "./services/insult.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('screenshotRenderer')
  screenshotRenderer: ScreenshotRendererComponent;

  constructor(public insultService: InsultService) {
  }

  ngOnInit(): void {
    this.insultService.initialize();
  }


  // saveImage() {
  //   this.screenshotRenderer.saveImage();
  // }
  //
  // copyImage() {
  //   this.screenshotRenderer.copyImage();
  //   this.imgClipSuccess = true;
  //   setTimeout(() => this.imgClipSuccess = false, 1000);
  // }
  //
  // textClipboardSuccess() {
  //   this.textClipSuccess = true;
  //   setTimeout(() => this.textClipSuccess = false, 1000);
  // }
}
