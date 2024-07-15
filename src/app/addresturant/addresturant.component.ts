import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantService } from '../restaurant.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-addresturant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addresturant.component.html',
  styleUrls: ['./addresturant.component.css']
})
export class AddResturantComponent {
  @Output() close = new EventEmitter<void>();
  addRestaurantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService // Inject RestaurantService
  ) {
    this.addRestaurantForm = this.formBuilder.group({
      name: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      location: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }

  onClose(): void {
    this.close.emit();
  }

  addRestaurant(): void {
    if (this.addRestaurantForm.valid) {
      const { name, rating, username, phone, address, location, photo } = this.addRestaurantForm.value;
      const success = this.restaurantService.addRestaurant(name, address, location, rating, photo);
      if (success) {
        console.log('Restaurant added:', this.addRestaurantForm.value);
        this.onClose();
      } else {
        console.error('Restaurant with the same name already exists.');
      }
    }
  }
}
