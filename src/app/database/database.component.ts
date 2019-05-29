import { Component, OnInit } from '@angular/core';
import { TestService} from '../test.service';



@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  firms:any =[];
  contacts:any = [];
  constructor(public rest:TestService) {}

  ngOnInit() {
    this.getFirms();
    this.getContacts();
  }

  getFirms() {
    return this.rest.getFirms().subscribe((data: {})=> {this.firms = data;})
  }

  getContacts() {
    return this.rest.getContacts().subscribe((data: {})=> {this.contacts = data;})
  }

}
