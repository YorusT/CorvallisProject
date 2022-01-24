import { Component, OnInit } from '@angular/core';
import { customers, ICustomers } from '../shared/mock/customers.mock';
import { DetailService } from '../shared/services/detail.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers : ICustomers[] = customers;

  constructor(private detailS:DetailService) { }

  ngOnInit(): void {
  }

  assignCustomer(param:ICustomers){
    this.detailS.chosenCustomer = param;
  }

}
