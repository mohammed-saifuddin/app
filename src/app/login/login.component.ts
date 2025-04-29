import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import {  FormGroup ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login:FormGroup;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    public DialogRef:MatDialogRef<LoginComponent>){
      this.login=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      });
    }
  onSubmit():void{
    if(this.login.valid)
    {
      console.log(this.login.value);
      this.DialogRef.close();
      this.router.navigate(['/home'])
    }
    

  }
}
