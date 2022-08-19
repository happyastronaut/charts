import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public show = true;

  constructor(
    protected loaderService: LoaderService,
  ) {
  }

  ngOnInit(): void {
    this.loaderService.loaderStatus$.subscribe(res => this.show = res);
  }

}
