import { Component, Input, OnInit } from '@angular/core';
import { ObjectModel } from '../../../core/models/meta.model';

@Component({
  selector: 'app-client-empathy-badge',
  templateUrl: './client-empathy-badge.component.html',
  styleUrls: ['./client-empathy-badge.component.scss']
})
export class ClientEmpathyBadgeComponent implements OnInit {
  @Input() empathy: ObjectModel;
  icon = 'emoticon-neutral';
  color = '#c0c0c0';
  background: string;
  style: any;

  constructor() {
  }

  ngOnInit() {
    // this.empathy = {id: 1, value: "Muy Mal", color: "FF2C11"};
    //  this.empathy = {id: 2, value: "Mal", color: "F2930E"};
    // this.empathy = {id: 3, value: "Más o Menos", color: "000"};
    this.empathy = {id: 4, value: "Bien", color: "06F71D"};
    // this.empathy = {id: 5, value: "Muy Bien", color: "248F4F"};

    this.style = {'background-color': `#${this.empathy.color}`};
    if (this.empathy) {
      this.color = `#${this.empathy.color}`;
      switch (this.empathy.id) {
        case 1: {
          this.icon = 'emoticon-dead';
          this.style = {'color': `#${this.empathy.color}`};
          break;
        }
        case 2: {
          this.icon = 'emoticon-sad';
          this.style = {
            'background-image': `linear-gradient(to top, #${this.empathy.color}, #${this.empathy.color} 25%, transparent 25%, transparent 100%)`
          };
          break;
        }
        case 3: {
          this.icon = 'emoticon-neutral';
          this.style = {
            'background-image': `linear-gradient(to top, #${this.empathy.color}, #${this.empathy.color} 50%, transparent 50%, transparent 100%)`
          };
          break;
        }
        case 4: {
          this.icon = 'emoticon-happy';
          this.style = {
            'background-image': `linear-gradient(to top, #${this.empathy.color}, #${this.empathy.color} 75%, transparent 75%, transparent 100%)`
          };
          break;
        }
        case 5: {
          this.icon = 'emoticon-excited';
          this.style = {
            'background-image': `linear-gradient(to top, #${this.empathy.color}, #${this.empathy.color} 100%, transparent 100%, transparent 100%)`
          };
          break;
        }
        default: {
          this.icon = 'emoticon-neutral';
          this.color = '#000';
        }

      }
    }
  }

}
