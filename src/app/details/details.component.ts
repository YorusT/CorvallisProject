import { Component, OnInit } from '@angular/core';
import { DetailService } from '../shared/services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public detailS:DetailService ) { }

  ngOnInit(): void {
  }

}
