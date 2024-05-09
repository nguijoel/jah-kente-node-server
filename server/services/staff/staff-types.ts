export interface Staff {
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

  /**
   * The user's role
   */
  role: string;

  /**
   * The user's avatar
   */
  photo?: string;


  biography?: string;
}
