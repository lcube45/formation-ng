import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() initClient = new Client();
  @Output() submitedForm: EventEmitter<Client> = new EventEmitter();
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      label: [this.initClient.label, Validators.required],
    });
  }

  register() {
    console.log(this.myForm.value);
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset();
  }

}
