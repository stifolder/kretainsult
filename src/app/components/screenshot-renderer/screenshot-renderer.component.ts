import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InsultService} from "../../services/insult.service";
import {SnapshotService} from "../../services/snapshot.service";

@Component({
  selector: 'app-screenshot-renderer',
  templateUrl: './screenshot-renderer.component.html',
  styleUrls: ['./screenshot-renderer.component.scss']
})
export class ScreenshotRendererComponent implements OnInit {

  constructor(public insultService: InsultService,
              private snapshotService: SnapshotService) {
  }

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  ngOnInit(): void {
    this.snapshotService.bindScreenshotRendererComponent(this);
  }
}
