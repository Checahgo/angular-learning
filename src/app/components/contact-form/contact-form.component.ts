import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  });

  runPercent = 0;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.contactForm.valueChanges.pipe(
      tap((value) => {
        this.calcComplete();
      })
    ).subscribe();
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.snackBar.open('Please fill out all fields', 'Dismiss', {
        duration: 3000
      });
    }
  }

  calcComplete() {
    let validFields = 0;
    Object.values(this.contactForm.controls).forEach(control => {
      if (control.valid) {
        validFields++;
      }
    });
    this.runPercent = (validFields / 3)*100;
  }

}
