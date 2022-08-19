import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss']
})
export class RefreshButtonComponent implements OnInit {

  constructor(
    protected apiService: ApiService,
  ) {
  }

  ngOnInit(): void {
  }

  refreshData(): void {
    this.apiService.getData();
  }
}
