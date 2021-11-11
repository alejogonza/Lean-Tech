import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formattemp'
})
export class TemperaturePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        let response;
        switch(args) {
            case "C":
                response = Math.round(value-273.15);
                break;

            case "K":
                response = Math.round(value);
                break;

            case "F":
                response = Math.round(value-459.67);
                break;

            default: 
                response = value;

        } 

        return response;
      }
}