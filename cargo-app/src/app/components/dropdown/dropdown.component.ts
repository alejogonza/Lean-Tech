import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import cities from '../../../assets/cities.json';

interface CITIES {
  cities: CITY[];
}

interface CITY {
  name: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropDownControl = new FormControl();
  @Output() onCitySelected = new EventEmitter<string>();
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  citiesObject: CITIES = cities;

  ngOnInit() {
    this.options = this.citiesObject.cities.map(c => c.name.charAt(0).toUpperCase() + c.name.slice(1));
    this.filteredOptions = this.dropDownControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchWeather(option: string) {
    this.onCitySelected.emit(option);
  }

}
