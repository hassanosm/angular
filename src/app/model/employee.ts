// src/app/model/employee.ts
export class Employee {
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
  
    constructor(name: string, position: string, department: string, email: string, phone: string) {
      this.name = name;
      this.position = position;
      this.department = department;
      this.email = email;
      this.phone = phone;
    }
  
    getName(): string {
      return this.name;
    }
  
    getPosition(): string {
      return this.position;
    }
  
    getDepartment(): string {
      return this.department;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getPhone(): string {
      return this.phone;
    }
  
    setName(name: string) {
      this.name = name;
    }
  
    setPosition(position: string) {
      this.position = position;
    }
  
    setDepartment(department: string) {
      this.department = department;
    }
  
    setEmail(email: string) {
      this.email = email;
    }
  
    setPhone(phone: string) {
      this.phone = phone;
    }
  
    toString(): string {
      return `Employee(name=${this.name}, position=${this.position}, department=${this.department}, email=${this.email}, phone=${this.phone})`;
    }
  }
  