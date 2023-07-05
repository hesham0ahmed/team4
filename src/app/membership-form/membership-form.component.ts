import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.scss']
})
export class MembershipFormComponent {

  constructor(){
    function createCompareValidator(controlOne: any, controlTwo: any) {
      return () => {
        if (controlOne.value !== controlTwo.value)
          return { match_error: 'Value does not match' };
        return null;
      }; 
    }

    this.members.addValidators(
      createCompareValidator(
        this.members.get('password'),
        this.members.get('passwordcheck')
      )
     );
  }

    members = new FormGroup({
    name: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    number: new FormControl(''),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)] ),
    passwordcheck: new FormControl('', [Validators.required, Validators.minLength(8)]),
    message: new FormControl(''),
    membership: new FormControl('', Validators.required),
    payment: new FormControl(''),
    newsletter: new FormControl(''),
    privacy: new FormControl('', Validators.required),
    dataprocessing: new FormControl('', Validators.required),

  });

  onSubmit () {
    if (this.members.valid) {
      // console.log(this.members.value);
      this.members.reset();
    }
    
  }

  

}
