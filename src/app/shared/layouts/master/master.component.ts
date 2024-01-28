import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RouterModule,CommonModule,HeaderComponent,HttpClientModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
