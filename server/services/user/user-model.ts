import { User } from "./user-types";


export class UserModel implements User {
  id: number;
  
  /**
   * The user's name
   */
  name: string;
  
  /**
   * The user's email
   */
  email: string;

  dateOfBirth: Date;

  gender: string;


  constructor (data:any) {
    this.dateOfBirth = new Date(data.dateOfBirth);
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.gender = data.gender;
  }
   
}
