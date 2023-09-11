import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormMessageComponent } from './contact-form-message.component';

describe('ContactFormMessageComponent', () => {
  let component: ContactFormMessageComponent;
  let fixture: ComponentFixture<ContactFormMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
