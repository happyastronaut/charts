import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration} from 'chart.js';
import {ApiService} from "../../services/api.service";
import {UserModel} from "../../models/user.model";
import {BaseChartDirective} from "ng2-charts";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // userData$: Observable<UserModel[]>;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  userData: UserModel[];
  errorFlag = false;

  constructor(
    private apiService: ApiService,
    private loaderService: LoaderService,
  ) {
    // this.userData$ = this.apiService.response;
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['20-29', '30-39', '40-49', '50-59', '60-69', '70-79'],
    datasets: [
      {data: [0, 0, 0, 0, 0, 0], label: 'Data'},
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    animation: {
      duration: 0
    }
  };

  ngOnInit(): void {
    this.updateChart();

    // this.apiService.getData().subscribe(
    //   res => {
    //     this.userData = res.sort((item, item2) => {
    //       return item.dob.age - item2.dob.age;
    //     });
    //     this.userData.forEach(item => {
    //       if (item.dob.age >= 20 && item.dob.age < 29) this.barChartData.datasets[0].data[0]++
    //       if (item.dob.age >= 30 && item.dob.age < 39) this.barChartData.datasets[0].data[1]++
    //       if (item.dob.age >= 40 && item.dob.age < 49) this.barChartData.datasets[0].data[2]++
    //       if (item.dob.age >= 50 && item.dob.age < 59) this.barChartData.datasets[0].data[3]++
    //       if (item.dob.age >= 60 && item.dob.age < 69) this.barChartData.datasets[0].data[4]++
    //       if (item.dob.age >= 70 && item.dob.age < 79) this.barChartData.datasets[0].data[5]++
    //     })
    //     console.log(this.barChartData.datasets[0]);
    //     this.chart?.update();
    //     this.loaderService.hideLoader();
    //   },
    //   error => {
    //     this.errorFlag = true;
    //   }
    // );


  }

  private updateChart(): void {
    this.loaderService.showLoader();
    this.apiService.response.subscribe(
      res => {
        this.userData = res;
        this.userData.forEach(item => {
          if (item.dob.age >= 20 && item.dob.age < 29) this.barChartData.datasets[0].data[0]++
          if (item.dob.age >= 30 && item.dob.age < 39) this.barChartData.datasets[0].data[1]++
          if (item.dob.age >= 40 && item.dob.age < 49) this.barChartData.datasets[0].data[2]++
          if (item.dob.age >= 50 && item.dob.age < 59) this.barChartData.datasets[0].data[3]++
          if (item.dob.age >= 60 && item.dob.age < 69) this.barChartData.datasets[0].data[4]++
          if (item.dob.age >= 70 && item.dob.age < 79) this.barChartData.datasets[0].data[5]++
        })
        this.chart?.update();
        this.loaderService.hideLoader();
      },
    )
  }

}