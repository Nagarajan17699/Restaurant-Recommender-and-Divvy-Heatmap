////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


/// This file and the source code provided can be used only for
/// the projects and assignments of this course

/// Last Edit by Dr. Atef Bader: 1/30/2019


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////




import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { timer } from 'rxjs';



@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  createForm: UntypedFormGroup;
  hintColor;
  timeLimit;


  constructor(private placesService: PlacesService, private fb: UntypedFormBuilder, private router: Router) {
    this.hintColor = "#01161E";

    this.createForm = this.fb.group({
      where: '',
      find: ''

    });
  }



  findPlaces(find, where) {


    this.placesService.findPlaces(find, where).subscribe(() => {

      this.router.navigate(['/list_of_places']);

    });


  }


  ngOnInit() {
  }
  

}
