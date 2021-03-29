import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PisiComponent } from './pisi.component';

describe('PisiComponent', () => {
  let component: PisiComponent;
  let fixture: ComponentFixture<PisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
