import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data-service/data.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUsers();
  }

}
