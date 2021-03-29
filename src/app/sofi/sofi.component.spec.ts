import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofiComponent } from './sofi.component';

describe('SofiComponent', () => {
  let component: SofiComponent;
  let fixture: ComponentFixture<SofiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
