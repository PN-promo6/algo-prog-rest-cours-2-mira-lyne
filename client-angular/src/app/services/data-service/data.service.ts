import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): void {
    this.httpClient.get('http://localhost:3000/users')
      .subscribe(
        res => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        },
      )
  }

}
