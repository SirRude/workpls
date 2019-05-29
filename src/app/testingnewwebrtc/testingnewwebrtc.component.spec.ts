import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingnewwebrtcComponent } from './testingnewwebrtc.component';

describe('TestingnewwebrtcComponent', () => {
  let component: TestingnewwebrtcComponent;
  let fixture: ComponentFixture<TestingnewwebrtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingnewwebrtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingnewwebrtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
