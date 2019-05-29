import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodeThreeComponent } from './metode-three.component';

describe('MetodeThreeComponent', () => {
  let component: MetodeThreeComponent;
  let fixture: ComponentFixture<MetodeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
