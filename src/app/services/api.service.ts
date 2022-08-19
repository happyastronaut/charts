import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map,Subject, take} from "rxjs";
import {UserModel} from "../models/user.model";
import {LoaderService} from "./loader.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private responseSource = new Subject<UserModel[]>();
  public response = this.responseSource.asObservable()

  constructor(
    private http: HttpClient,
    private loader: LoaderService,
  ) {
    this.getData();
  }

  // getData(): Observable<UserModel[]> {
  //   const baseUrl = 'https://randomuser.me/api/';
  //   const results = 'results=1000';
  //   const nat = 'nat=fr';
  //   const gender = 'gender=male'
  //   const exc = 'exc=location,email,login,registered,phone,cell,picture,id';
  //
  //   return this.http.get<UserModel[]>(`${baseUrl}?${results}&${nat}&${gender}&${exc}`).pipe(
  //     map((data: any) => data.results),
  //   );
  //
  // }

  getData(): void {
    this.loader.showLoader();
    const baseUrl = 'https://randomuser.me/api/';
    const results = 'results=1000';
    const nat = 'nat=fr';
    const gender = 'gender=male'
    const exc = 'exc=location,email,login,registered,phone,cell,picture,id';

    this.http.get<any>(`${baseUrl}?${results}&${nat}&${gender}&${exc}`)
      .pipe(
        take(1),
        map(resp => resp.results),
      )
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }
}
