import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CarouselData } from './CarouselNav';
import { carouselData } from './carousel-navigation-data';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.css'],
  providers: [NgbCarouselConfig]
})

export class CarouselNavigationComponent implements OnInit {
  
  images: CarouselData[] = carouselData.map(eachItem => eachItem);

  constructor() { }

  ngOnInit(): void {
  }

}
