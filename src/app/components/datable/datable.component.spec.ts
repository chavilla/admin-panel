import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatableComponent } from './datable.component';

describe('DatableComponent', () => {
  let component: DatableComponent;
  let fixture: ComponentFixture<DatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
