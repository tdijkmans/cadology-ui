import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapdataComponent } from './lapdata.component';

describe('LapdataComponent', () => {
  let component: LapdataComponent;
  let fixture: ComponentFixture<LapdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LapdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
