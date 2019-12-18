import { Component, OnInit } from '@angular/core';
import { Charity } from 'src/app/shared/charity';
import { toysService } from 'src/app/shared/toysService';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exchange-creation',
  templateUrl: './exchange-creation.component.html',
  styleUrls: ['./exchange-creation.component.css']
})
export class ExchangeCreationComponent implements OnInit {

  charities: Set<Charity> = new Set<Charity>();

  addToyForm = this.fb.group(
    {
      name : [''],
      image : [''],
      desc : [''],
      charity : ['']
    }
  )

  constructor(private toyService: toysService, private fb: FormBuilder) { }

  ngOnInit() {
   this.getCharities();
  }

  getCharities()
  {
    this.charities = this.toyService.getAllCharities();
  }

  addToy()
  {
    console.log(this.addToyForm.value)
  }

}
