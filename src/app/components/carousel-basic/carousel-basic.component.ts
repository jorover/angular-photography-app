import { Component, OnInit } from '@angular/core';
import { GImages } from './GImages';
import { galleryImg } from './galleryImages';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit {

  gallerys: GImages[] = galleryImg.map(eachitem => eachitem);

  constructor() { }

  ngOnInit(): void {
  }

}
