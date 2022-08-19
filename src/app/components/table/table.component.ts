import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public userData: UserModel[];

  constructor(
    private api: ApiService,
  ) {
  }

  ngOnInit(): void {
    this.api.response.subscribe(res => {
      this.userData = res.sort((item, item2) => {
        return item2.dob.age - item.dob.age;
      }).slice(0, 10);
    });
  }

}
