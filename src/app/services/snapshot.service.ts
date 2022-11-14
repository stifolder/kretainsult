import {Injectable} from "@angular/core";
import {ScreenshotRendererComponent} from "../components/screenshot-renderer/screenshot-renderer.component";
import {KretaInsultToasterService} from "./kreta-insult-toaster.service";

declare let html2canvas: any;

@Injectable()
export class SnapshotService {
  currentScreenshotRenderer: ScreenshotRendererComponent;

  constructor(private toastService: KretaInsultToasterService) {
  }

  bindScreenshotRendererComponent(renderer: ScreenshotRendererComponent) {
    this.currentScreenshotRenderer = renderer;
  }

  copyImage() {
    html2canvas(this.currentScreenshotRenderer.screen.nativeElement).then((canvas: any) => {
      canvas.toBlob((blob: Blob) => {
        let clipboardData = [new ClipboardItem({['image/png']: blob})]
        navigator.clipboard.write(clipboardData);
      }, 'image/png');
    }).then(() => {
      this.toastService.showGenericSuccess('Kép a vágólapon!');
    });
  }

  saveImage() {
    html2canvas(this.currentScreenshotRenderer.screen.nativeElement).then((canvas: any) => {
      this.currentScreenshotRenderer.canvas.nativeElement.src = canvas.toDataURL();
      this.currentScreenshotRenderer.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.currentScreenshotRenderer.downloadLink.nativeElement.download = 'inzultus.png';
      this.currentScreenshotRenderer.downloadLink.nativeElement.click();
    });
  }
}
