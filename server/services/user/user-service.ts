import { users } from "./user-data";
/**
 * Defines the user service
 */
const userService = {
  /**
   * A method that returns a single user by id;
   */
  getUserById: (id: number) => users.find((e) => e.id === id),

  allUsers: () => [...users],
};

/**
 * Exports the service so it is available for use in other services.
 */
export default userService;
