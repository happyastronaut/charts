import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChartComponent} from './components/chart/chart.component';
import {TableComponent} from './components/table/table.component';
import {NgChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    LoaderComponent,
    FooterComponent,
    RefreshButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
