import { User } from "./user-types";

const date = new Date();

const listOfUsers: User[] = [
  {
    id: 1,
    /**
     * The user's name
     */
    name: "John Doe",
    /**
     * The user's email
     */
    email: "qpmzj@example.com",
    dateOfBirth: date,
    gender: "male",
  },
  {
    id: 2,
    /**
     * The user's name
     */
    name: "Mary Jane",
    /**
     * The user's email
     */
    email: "qpmzj2@example.com",
    dateOfBirth: date,
    gender: "female",
  },
  {
    id: 3,
    /**
     * The user's name
     */
    name: "Suzanne Kane",
    /**
     * The user's email
     */
    email: "qpmzj2@example.com",
    dateOfBirth: date,
    gender: "female",
  },
];

/**
 * Defines the user service
 */
const userService = {
  /**
   * A method that returns a single user by id;
   */
  getUserById: (id: number) => listOfUsers.find((e) => e.id === id),

  allUsers: () => [...listOfUsers],
};

/**
 * Exports the service so it is available for use in other services.
 */
export default userService;
