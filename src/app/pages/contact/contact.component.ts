import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm : FormGroup = this.fb.group({
    name: ['', Validators.required ],
    email: ['', Validators.required, Validators.email ],
    phone: ['', Validators.required ],
    subject: ['', Validators.required ],
    message: ['', Validators.required ],
  });

  onSubmit() {
    if(this.contactForm.valid){
      console.log('Form Submitted', this.contactForm.value);
      // Add API Call Logic Here
    }
  }
}
