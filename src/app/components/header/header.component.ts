import { Component, OnInit } from '@angular/core';
import { IconImg } from './Icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  PrimaryBtn:string = 'VIEW MY WORK'
  SecondaryBtn:string = 'READ MORE'
  openMenu:string = '/assets/openmenu.png'
  closeMenu:string = '/assets/closemenu.png'
  icons = IconImg.map(eachItem => eachItem);
  hamburgerMenu:string = 'hamburgerMenu'
  

  openCloseMenu(){
    if(this.hamburgerMenu === 'hamburgerMenu'){
      this.hamburgerMenu = 'hamburgerMenu openCloseMenu'
    } else {
      this.hamburgerMenu = 'hamburgerMenu'
    }
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
