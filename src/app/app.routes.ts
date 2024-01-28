import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';
import { GetComponent } from './get/get.component';
import { AddCategoryComponent } from './shared/components/add-category/add-category.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    {
        path: '',
        component: MasterComponent,
        children: [{ path: 'todo', component: TodoComponent }]
    },
    {
        path: '',
        component: MasterComponent,
        children: [{ path: 'category', component: AddCategoryComponent }]
    },
    {
        path: '',
        component: DefaultComponent,
        children: [{ path: 'get', component: GetComponent }]
    },

];
