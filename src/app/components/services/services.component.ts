import { Component, OnInit } from '@angular/core';
import { ServicesData } from './servicesData';
import { Services } from 'src/app/components/services/Services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  Btntitle: string = 'Book Now'

  servicesInfo: Services[] = ServicesData.map(eachitem => eachitem);
  
  constructor() { }

  ngOnInit(): void {
  }

}
