import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  
  constructor(private toastr: ToastrService) { }
  showSuccess() {
    console.log("not")
    this.toastr.success('Hello world!', 'Toastr fun!', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: true,
    });
  }
  
}
