import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "src/app/shared/contact.service";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
// import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contactForm: FormGroup | any;
  
  constructor(private fb: FormBuilder,private contactService: ContactService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  saveContactDetails() {

    if (this.contactForm.valid) {
      this.contactService.createData(this.contactForm.value).subscribe(res => {
        this.contactForm.reset();
        Swal.fire({
          title: 'Success',
          text: 'Your message has been sent successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(r =>
          window.location.reload()
          );
          // Call the sendEmail function after a successful form submission
          this.sendEmail(this.contactForm.value);
      } , (error) => {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong, please try again later',
          icon: 'error',
          confirmButtonText: 'Ok'
        }).then(r =>
          window.location.reload());
      });
    }
    
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_0rsk18a', 'template_m6lpwxp', e.target as HTMLFormElement, 'wUvWZoYeLcYhUQAUI')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  

}
