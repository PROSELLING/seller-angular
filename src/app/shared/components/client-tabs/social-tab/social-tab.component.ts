import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientModel } from '../../../../core/models/client.model';

@Component({
  selector: 'app-social-tab',
  templateUrl: './social-tab.component.html',
  styleUrls: ['./social-tab.component.scss']
})
export class SocialTabComponent implements OnInit {
  @Input() client: ClientModel;
  socialForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.client !== undefined) {
      if (this.client.client_networks.length) {
        const [clientNetworks] = this.client.client_networks;
        this.socialForm = this.fb.group({
          twitter: clientNetworks.twitter,
          facebook: clientNetworks.facebook,
          linkedin: clientNetworks.linkedin,
          instagram: clientNetworks.instagram,
          googleplus: clientNetworks.google
        });
      } else {
        this.setEmptyFormGroup();
      }
    } else {
      this.setEmptyFormGroup();
    }
  }

  setEmptyFormGroup() {
    this.socialForm = this.fb.group({
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      googleplus: ''
    });
  }

}
