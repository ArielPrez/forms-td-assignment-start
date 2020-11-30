import { Component, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form', { static: false }) subsForm: NgForm;
  defaultSub = 'advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.subsForm.value.email;
    this.user.subscription = this.subsForm.value.subs;
    this.user.password = this.subsForm.value.passw;
    console.log(this.subsForm.value);
  }
}
