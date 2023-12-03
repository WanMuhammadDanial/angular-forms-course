import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  val = {
    email: "dino@gmail.com",
    password: "1234",
  };

  constructor() {}

  ngOnInit() {}

  login(form: NgForm, submit: Event) {
    console.log(form.value, form.valid, submit);
    console.log("val ", this.val);
  }
}
