import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leads-sidenav',
  templateUrl: './leads-sidenav.component.html',
  styleUrls: ['./leads-sidenav.component.scss']
})
export class LeadsSidenavComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params =>{
        console.log('Este es el heroe: ', params['id']);
    });
  }

  ngOnInit() {
  }

}
