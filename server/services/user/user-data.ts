import { User } from "./user-types";

const date = new Date();

export const users: User[] = [
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
