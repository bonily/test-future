export interface PersonType {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: Adress,
  description: string,
}


export interface Adress {
  streetAddress: string,
  city: string,
  state: string,
  zip: string
}
