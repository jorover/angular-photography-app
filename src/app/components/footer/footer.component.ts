import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerSection:string = 'footerSection'
  footerText: string = 'footerText'
  AboutUs: string = 'About Us'
  Newsletter: string = 'NewsLetter'
  follow:string = 'Follow us'

  constructor() { 
  }

  ngOnInit(): void {
  }

}
