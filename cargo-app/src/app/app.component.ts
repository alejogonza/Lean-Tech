import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';

interface INFO {
  title: string;
  temp: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cargo-app';
  infoList: INFO[] = [];

  constructor(private service: CitiesService) {}

  public loadInformation(opt: string) {
    this.service.getCityInfo(opt).subscribe((res) => {
      const obj = JSON.parse(res);
      const values: INFO = {
        title: opt,
        temp: obj["main"].temp,
        description: obj["weather"][0].description,
        icon: obj["weather"][0].icon
      };
      this.infoList[this.infoList.length] = values;
    });
  }
}
