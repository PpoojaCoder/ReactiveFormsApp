import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// this is model class defining structure of form
export class App {
  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
