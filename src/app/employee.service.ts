import { Injectable } from '@angular/core';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];

  constructor() {}

  isSame(email: string): boolean {
    return this.employees.some(employee => employee.email === email);
  }

  addEmployee(name: string, position: string, department: string, email: string, phone: string): boolean {
    if (this.isSame(email)) {
      return false;
    }

    const newEmployee = new Employee(name, position, department, email, phone);
    this.employees.push(newEmployee);
    return true;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(email: string): Employee | undefined {
    return this.employees.find(employee => employee.email === email);
  }

  updateEmployee(email: string, updatedData: Partial<Employee>): boolean {
    const employee = this.getEmployee(email);
    if (employee) {
      Object.assign(employee, updatedData);
      return true;
    }
    return false;
  }

  deleteEmployee(email: string): boolean {
    const index = this.employees.findIndex(employee => employee.email === email);
    if (index !== -1) {
      this.employees.splice(index, 1);
      return true;
    }
    return false;
  }
}
