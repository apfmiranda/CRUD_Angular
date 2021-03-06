import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosFormComponent } from './contatos-form.component';

describe('ContatosFormComponent', () => {
  let component: ContatosFormComponent;
  let fixture: ComponentFixture<ContatosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
