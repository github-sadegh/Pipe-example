import { Injectable } from "@angular/core";

@Injectable({
        providedIn: "root"
})
export class UserService {
        users = [
                {name:'ABC', id:1},
                {name:'XYZ', id:2},
        ];

        constructor() { }

        getById(userId: number): any {
                return this.users.find((u) => u.id == userId);
        }
}
