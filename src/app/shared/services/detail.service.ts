import { Injectable } from '@angular/core';
import { ICustomers } from '../mock/customers.mock';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  chosenCustomer!: ICustomers;

  constructor() { }
}
