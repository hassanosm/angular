import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResturantComponent } from './addresturant.component';

describe('AddresturantComponent', () => {
  let component: AddResturantComponent;
  let fixture: ComponentFixture<AddResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResturantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
