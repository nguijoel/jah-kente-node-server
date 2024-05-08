import { Staff } from "./staff-data";
/**
 * Defines the Staff service
 */
const staffService = {
  /**
   * A method that returns a single user by id;
   */
  getStaffById: (id: number) => Staff.find((e) => e.id === id),

  allStaff: () => [...Staff],
};

/**
 * Exports the service so it is available for use in other services.
 */
export default staffService;
