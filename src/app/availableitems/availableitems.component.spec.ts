import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableitemsComponent } from './availableitems.component';

describe('AvailableitemsComponent', () => {
  let component: AvailableitemsComponent;
  let fixture: ComponentFixture<AvailableitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
