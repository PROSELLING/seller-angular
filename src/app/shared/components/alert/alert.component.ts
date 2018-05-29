import {Component, OnInit} from '@angular/core';

import {AlertService} from '../../../core/services/alert.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent implements OnInit {
  message: any;

  constructor
  (private alertService: AlertService,
   public  toastr: ToastrService) {
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(
      message => {
        if (message) {
          this.setMessageType(message);
        }
      }
    );
  }

  setMessageType(message: any) {
    switch (message.type) {
      case 'success': {
        this.showSuccess(message.text);
        break;
      }
      case 'error': {
        this.showError(message.text);
        break;
      }
      case 'warning': {
        this.showWarning(message.text);
        break;
      }
      case 'info': {
        this.showInfo(message.text);
        break;
      }
    }
  }

  showSuccess(message: string) {
    setTimeout(() => this.toastr.success(message));
  }

  showError(message: string) {
    setTimeout(() => this.toastr.error(message));
  }

  showWarning(message: string) {
    setTimeout(() => this.toastr.warning(message));
  }

  showInfo(message: string) {
    setTimeout(() => this.toastr.info(message));
  }
}
