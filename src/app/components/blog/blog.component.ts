import { Component, OnInit } from '@angular/core';
import { Blogs } from './Blog';
import { blogData } from './blogData';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogInfo: Blogs[] = blogData.map(eachItem => eachItem);

  constructor() { }

  ngOnInit(): void {
  }

}

