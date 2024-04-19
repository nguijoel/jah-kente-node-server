export interface User {
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
}
