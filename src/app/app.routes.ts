import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddResturantComponent } from './addresturant/addresturant.component';
import { AddEmployeeComponent } from './addemployee/addemployee.component';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add-restaurant', component: AddResturantComponent },
  { path: 'admin/add-employee', component: AddEmployeeComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', redirectTo: '/admin' }  // Wildcard route for handling 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
