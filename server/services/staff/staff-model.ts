import { Staff } from "./staff-types";


export class StaffModel implements Staff {
  id: number;

  /**
   * The user's name
   */
  name: string;

  /**
   * The user's email
   */
  email: string;


  role: string;


  constructor (data:any) {

    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.role = data.role;
  }

}
