import { staffList } from "./staff-data";
/**
 * Defines the Staff service
 */
const staffService = {
  /**
   * A method that returns a single user by id;
   */
  getStaffById: (id: number) => staffList.find((e) => e.id === id),

  allStaff: () =>
    [...staffList].map((staff) => ({
      id: staff.id,
      name: staff.name,
      email: staff.email,
    })),
};

/**
 * Exports the service so it is available for use in other services.
 */
export default staffService;
