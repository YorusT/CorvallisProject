export interface ICustomers {
  firstName:string,
  lastName:string,
  adress:string,
  city:string,
  state:string
}

export const customers : ICustomers[] = [
{ firstName:"marco",
  lastName:"baio",
  adress:"via abruzzi 3",
  city:"venezia",
  state:"italia"},

  { firstName:"john",
    lastName:"marshall",
    adress:"abby road 2",
    city:"londra",
    state:"regno unito"},

  { firstName:"francois",
    lastName:"le feaguero",
    adress:"rue moint blanhe 3",
    city:"lion",
    state:"francia"}

]
