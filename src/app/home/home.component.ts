import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
