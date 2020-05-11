import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data-service/data.service";
import { User } from '../models/user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUsers()
      .subscribe(
        res => {
          this.users = res;
        },
        (error) => {
          console.log(error);
        },
      )
  }

}
