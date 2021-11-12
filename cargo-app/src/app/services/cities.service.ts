import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CitiesService {
    constructor(private http: HttpClient) { }

    public getCityInfo(cityName: string): Observable<string> {
        return this.http.get('/data/2.5/weather?q='.concat(cityName)
        .concat(',uk&appid=aa0e4b181ec0aa8fd08bcc3095412fb7'), {responseType: 'text'});
    }
} 