export interface Child {
  name: string,
  age: number
}

export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate?: number,
  children: Child[] | null
}

