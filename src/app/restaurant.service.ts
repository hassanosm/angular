import { Injectable } from '@angular/core';
import { Restaurant } from './model/resturant'; // Adjust the path as needed


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants: Restaurant[] = [];

  constructor() {}

  private findRestaurantIndex(name: string): number {
    return this.restaurants.findIndex(restaurant => restaurant.name === name);
  }

  isSame(name: string): boolean {
    return this.findRestaurantIndex(name) !== -1;
  }

  addRestaurant(name: string, address: string, cuisine: string, rating: number, image: string): boolean {
    if (this.isSame(name)) {
      return false;
    }

    const newRestaurant = new Restaurant(name, address, cuisine, rating, image);
    this.restaurants.push(newRestaurant);
    return true;
  }

  getRestaurants(): Restaurant[] {
    return [...this.restaurants]; // Return a copy to avoid direct mutation
  }

  getRestaurant(name: string): Restaurant | undefined {
    return this.restaurants.find(restaurant => restaurant.name === name);
  }

  
  deleteRestaurant(name: string): boolean {
    const index = this.findRestaurantIndex(name);
    if (index !== -1) {
      this.restaurants.splice(index, 1);
      return true;
    }
    return false;
  }
}
