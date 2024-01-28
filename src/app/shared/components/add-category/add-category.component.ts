import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../../../core/models/add-category-request.model';
import { AddCategoryService } from '../../../core/services/add-category/add-category.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  model: AddCategoryRequest

  constructor(private addCategoryService: AddCategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit() {
    this.addCategoryService.addCategory(this.model).subscribe({
      next: (response) => {
        console.log('Category added successfully',response)
      },
      error: (error) => {
        console.log('Error occurred while adding category',error)
      }
    } )
  }
}
