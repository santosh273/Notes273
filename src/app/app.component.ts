import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Notes';

   username;
  constructor(private us:UserService,private rt:Router){}

  ngOnInit()
  {
    this.us.getUser().subscribe(
      res => {
        this.username = res;
      }
    )
  }

  logout()
  {
    localStorage.clear();
    this.us.setUser(undefined);
    this.rt.navigateByUrl("/login");
  }

  
}
