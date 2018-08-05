import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { FormService } from '../../../../core/services/form.service';
import { Observable } from 'rxjs';
import { ClientModel } from '../../../../core/models/client.model';
import * as fromClients from '../../../../clients/store';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ObjectModel } from '../../../../core/models/meta.model';

@Component({
  selector: 'app-email-tab',
  templateUrl: './email-tab.component.html',
  styleUrls: ['./email-tab.component.scss']
})
export class EmailTabComponent implements OnInit {
  @Input() client: ClientModel;
  emailTypes$: Observable<ObjectModel[]>;
  emailTypes: ObjectModel[];

  emailForm: FormGroup;
  emails = [];
  dataSource = new MatTableDataSource(this.emails);
  tableColumns = ['type', 'email', 'main', 'options'];

  constructor
  (private fb: FormBuilder,
   private formService: FormService,
   private store: Store<fromClients.State>) {
  }

  ngOnInit() {
    this.emailTypes$ = this.store.pipe(
      select(fromClients.getClientMailTypes),
      tap(emailTypes => {
        this.emailTypes = emailTypes;
        this.setEmailTypes();
      })
    );

    this.emailForm = this.fb.group({
      emailTypes: '',
      email: '',
      mainEmail: ''
    });
  }

  private setEmailTypes(): void {
    if (this.client !== undefined) {
      if (this.client.client_mails.length) {
        for (const email of this.client.client_mails) {
          const [emailTypeObject] = this.emailTypes.filter(emailType => emailType.id === String(email.id_type_mail));
          if (emailTypeObject) {
            const emailForm = this.fb.group({
              emailTypes: emailTypeObject,
              email: email.mail,
              mainEmail: email.principal === 1 ? 'Sí' : 'No'
            });
            this.addEmail(emailForm);
          }
        }
      }
    }
  }

  addEmail(emailForm: FormGroup = this.emailForm) {
    this.formService.addTableItem(emailForm, this.emails, this.dataSource);
  }

  deleteEmail(index) {
    this.formService.deleteTableItem(this.emails, this.dataSource, index);
  }

}
