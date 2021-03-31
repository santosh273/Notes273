import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserService,private rt:Router) { }

  ngOnInit(): void {
  }

  onSubmit(credObj)
  {
    this.us.loginUser(credObj).subscribe(
      res=>{
        if(res["message"] == "success")
        {
          localStorage.setItem("token",res["signedToken"]);
          localStorage.setItem("username",res["username"]);
          let username = localStorage.getItem("username");
          this.us.setUser(username);
          this.rt.navigateByUrl("/dashboard");
        }
        else{
          alert(res["message"]);
        }
      },
      err => {
        console.log(err);
        alert("Something went Wrong...Try again...");
      }
    )
  }

  forgot()
  {
    this.rt.navigateByUrl("/forgotpwd");
  }

  register()
  {
    this.rt.navigateByUrl("/register");
  }

}
