export interface User {
  /**
   * The user identifier
   */
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

  photo?: string;

  biography?: string;
}
