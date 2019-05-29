import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraWebrtctestComponent } from './extra-webrtctest.component';

describe('ExtraWebrtctestComponent', () => {
  let component: ExtraWebrtctestComponent;
  let fixture: ComponentFixture<ExtraWebrtctestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraWebrtctestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraWebrtctestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
