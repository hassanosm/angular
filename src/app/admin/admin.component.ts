import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddResturantComponent } from '../addresturant/addresturant.component';
import { AddEmployeeComponent } from '../addemployee/addemployee.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AddResturantComponent, AddEmployeeComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  restaurants = [
    { id: 1, name: 'Restaurant A' },
    { id: 2, name: 'Restaurant B' }
  ];

  menuItems = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' }
  ];

  orders = [
    { id: 1, status: 'Pending' },
    { id: 2, status: 'Delivered' }
  ];

  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];

  showAddRestaurantForm = false;
  showAddEmployeeForm = false;
  showAddMenuItemForm = false; // Add this line

  constructor() {}

  ngOnInit(): void {}

  openAddRestaurantForm() {
    this.showAddRestaurantForm = true;
  }

  closeAddRestaurantForm() {
    this.showAddRestaurantForm = false;
  }

  openAddEmployeeForm() {
    this.showAddEmployeeForm = true;
  }

  closeAddEmployeeForm() {
    this.showAddEmployeeForm = false;
  }

  // Add the method for managing menu items
  openAddMenuItemForm() {
    this.showAddMenuItemForm = true;
  }

  closeAddMenuItemForm() {
    this.showAddMenuItemForm = false;
  }
}
