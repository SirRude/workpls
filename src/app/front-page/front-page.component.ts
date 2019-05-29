import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'




@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  
})

export class FrontPageComponent implements OnInit {

  constructor(private router : Router) {
    
   }

  ngOnInit() { 
    
  }

  bounce(){
    this.router.navigate(['/test']);
  }

  join() {
    //test = document.getElementsByTagName('meetingURL').item.name;
    //this.router.navigateByUrl('test#'+test);
  }

}
