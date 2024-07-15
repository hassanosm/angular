import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddEmployeeComponent {
  @Output() close = new EventEmitter<void>();
  addEmployeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addEmployeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onClose(): void {
    this.close.emit();
  }

  addEmployee(): void {
    if (this.addEmployeeForm.valid) {
      console.log(this.addEmployeeForm.value);
      this.onClose();
    }
  }
}
