import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'nameOfUser'
})

export class UserNamePipe implements PipeTransform {
    transform(value: object, args: string[]){
        if(value){
                return value.substring(0,7) + "...";
        }
    }
}