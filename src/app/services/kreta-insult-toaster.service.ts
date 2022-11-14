import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class KretaInsultToasterService {
  constructor(private toastr: ToastrService) {
  }

  showGenericSuccess(additionalMsg?: string) {
    this.toastr.success(additionalMsg, "Siker!");
  }

}
