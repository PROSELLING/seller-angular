import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-social-tab',
  templateUrl: './social-tab.component.html',
  styleUrls: ['./social-tab.component.scss']
})
export class SocialTabComponent implements OnInit {
  socialForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.socialForm = this.fb.group({
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      googleplus: ''
    });
  }

}
