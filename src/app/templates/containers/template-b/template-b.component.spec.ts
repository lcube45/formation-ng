import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBComponent } from './template-b.component';

describe('TemplateBComponent', () => {
  let component: TemplateBComponent;
  let fixture: ComponentFixture<TemplateBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
