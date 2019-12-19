import { Component, OnInit } from '@angular/core';
import { Charity } from 'src/app/shared/charity';
import { toysService } from 'src/app/shared/toysService';
import { FormBuilder } from '@angular/forms';
import { Toy } from 'src/app/shared/toy';
import { HttpClient } from '@angular/common/http';

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

  constructor(private toyService: toysService, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
   this.getCharities();
  }

  getCharities()
  {
    this.charities = this.toyService.getAllCharities();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addToyForm.get('image').setValue(file);
    }
  }

  addToy()
  {
    const formData = new FormData();
    console.log(formData);
    formData.append('image', this.addToyForm.get('image').value);
    this.http.post<any>("http://localhost:3000/toy/upload-image", formData).subscribe(
      (res) => {
        console.log(res);
        this.newToy = new Toy(this.addToyForm.value.name, res.data.name, this.addToyForm.value.desc, 1, this.addToyForm.value.charity);
        this.toyService.addToy(this.newToy).subscribe(response => {
          console.log(response);
        });
      },
      (err) => console.log(err)
    );
    console.log()

  }

}
