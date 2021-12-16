import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'userPipe',
})

export class UserPipe implements PipeTransform {

    constructor() { }

    transform(user: any): string {
        console.log("Hi Bro");
        
        let text = user.id + '-' + user.name;
        return text;
    }
}