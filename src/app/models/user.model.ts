export interface UserModel {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string,
  },
  dob: {
    date: string,
    age: number,
  }
  nat: string,
}
