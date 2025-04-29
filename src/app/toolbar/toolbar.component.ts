import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from '../login/login.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {ChangeDetectionStrategy,  inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { publishFacade } from '@angular/compiler';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RegisterComponent } from '../register/register.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone:true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatTooltipModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
 
})

export class ToolbarComponent {
  constructor(public dialog:MatDialog){}
  openRegDialog():void{
    this.dialog.open(RegisterComponent,{
      width:'600px'
    })
  }
  openLoginDialog():void{
    this.dialog.open(LoginComponent,{
      width:'500px'
    })
     
   

  }
}

