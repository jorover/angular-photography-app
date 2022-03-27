import { Component, OnInit } from '@angular/core';
import { CompLogo } from './Complogo';
import { complogos } from './complogodata';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  ShowcaseSection: string = 'ShowcaseSection'

  complogos: CompLogo [] = complogos.map(eachItem => eachItem)

  constructor() { }

  ngOnInit(): void {
  }

}
