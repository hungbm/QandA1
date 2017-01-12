import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'posttitle'
})

export class PostTitlePipe implements PipeTransform {
    transform(value: object, args: string[]){
        if(value){
           
            if(value.question){
                return value.question.title.substring(0,50) + "...";
            }else {
                return value.content.substring(0,50) + "...";
            }
        }
    }
}
