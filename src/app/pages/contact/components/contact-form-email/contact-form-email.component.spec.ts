import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormEmailComponent } from './contact-form-email.component';

describe('ContactFormEmailComponent', () => {
  let component: ContactFormEmailComponent;
  let fixture: ComponentFixture<ContactFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
