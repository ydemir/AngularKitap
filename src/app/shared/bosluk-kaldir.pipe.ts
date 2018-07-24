
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "BoslukKaldir"
})
export class BoslukKaldirPipe implements PipeTransform {
    transform(value: string, karakter: string): string {
        return value.replace(karakter, ' ');
    }


}