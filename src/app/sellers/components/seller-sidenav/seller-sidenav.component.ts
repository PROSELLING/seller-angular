import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-sidenav',
  templateUrl: './seller-sidenav.component.html',
  styleUrls: ['./seller-sidenav.component.scss']
})
export class SellerSidenavComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log('Este es el seller: ', params);
    });
  }

  ngOnInit() {
  }

}
