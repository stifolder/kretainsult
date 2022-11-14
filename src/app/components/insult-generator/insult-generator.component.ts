import {Component} from '@angular/core';
import {InsultService} from "../../services/insult.service";
import {SnapshotService} from "../../services/snapshot.service";
import {KretaInsultToasterService} from "../../services/kreta-insult-toaster.service";

@Component({
  selector: 'app-insult-generator',
  templateUrl: './insult-generator.component.html',
  styleUrls: ['./insult-generator.component.scss']
})
export class InsultGeneratorComponent {
  constructor(public insultService: InsultService,
              public snapshotService: SnapshotService,
              public toastService: KretaInsultToasterService) {
  }
}
