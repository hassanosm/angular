export class Restaurant {
    name: string;
    address: string;
    cuisine: string;
    rating: number;
    image: string;
  
    constructor(name: string, address: string, cuisine: string, rating: number, image: string) {
      this.name = name;
      this.address = address;
      this.cuisine = cuisine;
      this.rating = rating;
      this.image = image;
    }
  
    getName(): string {
      return this.name;
    }
  
    getAddress(): string {
      return this.address;
    }
  
    getCuisine(): string {
      return this.cuisine;
    }
  
    getRating(): number {
      return this.rating;
    }
  
    getImage(): string {
      return this.image;
    }
  
    setName(name: string) {
      this.name = name;
    }
  
    setAddress(address: string) {
      this.address = address;
    }
  
    setCuisine(cuisine: string) {
      this.cuisine = cuisine;
    }
  
    setRating(rating: number) {
      this.rating = rating;
    }
  
    setImage(image: string) {
      this.image = image;
    }
  
    toString(): string {
      return `Restaurant(name=${this.name}, address=${this.address}, cuisine=${this.cuisine}, rating=${this.rating}, image=${this.image})`;
    }
  }
  