import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { StatusPrestation } from 'src/app/shared/enums/status-prestation.enum';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  @Input() initPrestation = new Prestation();
  @Output() submitedForm: EventEmitter<Prestation> = new EventEmitter();
  myForm: FormGroup;
  typePrestation = TypePrestation;
  statutPrestation = StatusPrestation;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      type: [this.initPrestation.type, Validators.required],
      client: [this.initPrestation.client, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      duree: [this.initPrestation.duree, Validators.required],
      tjmHt: [this.initPrestation.tjmHt, Validators.required],
      tva: [this.initPrestation.tva, Validators.required],
      status: [this.initPrestation.status, Validators.required]
    });
  }

  register() {
    console.log(this.myForm.value);
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset();
  }

}
