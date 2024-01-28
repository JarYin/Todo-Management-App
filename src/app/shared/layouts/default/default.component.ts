import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterModule, CommonModule,HttpClientModule],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {

}
