import staffService from "./staff-service";

export default (app: any) => {
  //API endpoint to return users
  app.get("/staff", async (_: any, res: any) => {
    const staff = staffService.allStaff();
    res.send(staff);
  });

  //API endpoint to return a user by Id
  app.get("/staff/:id", async (req: any, res: any) => {
    // Get the id from the request and convert it to a number.
    const id = parseInt(req.params.id),
      // Get the user by id
      staff = staffService.getStaffById(id);
    res.send(staff);
  });
};
