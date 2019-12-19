import { Component, OnInit } from '@angular/core';
import { Charity } from 'src/app/shared/charity';
import { toysService } from 'src/app/shared/toysService';
import { FormBuilder } from '@angular/forms';
import { Toy } from 'src/app/shared/toy';

@Component({
  selector: 'app-exchange-creation',
  templateUrl: './exchange-creation.component.html',
  styleUrls: ['./exchange-creation.component.css']
})
export class ExchangeCreationComponent implements OnInit {

  charities: Set<Charity> = new Set<Charity>();
  newToy: Toy;

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
    this.newToy = new Toy(this.addToyForm.value.name, this.addToyForm.value.image, this.addToyForm.value.desc, 1, this.addToyForm.value.charity);
    this.toyService.addToy(this.newToy).subscribe(response => {
      console.log(response);
    });
  }

}
