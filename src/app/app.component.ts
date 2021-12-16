import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public user: UserService,
    private userService: UserService,
  )
  {}

  ngOnInit() {
  }

  getUser(userId: number){
    console.log(
      `Hi Bro`
    );
    
    return this.userService.getById(userId);
  }
}
