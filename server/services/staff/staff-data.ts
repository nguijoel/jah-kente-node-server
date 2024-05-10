import { Staff } from "./staff-types";

export const staffList: Staff[] = [
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

    role: "user",

    photo:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",

    biography:
      "As a writer, I have to let readers and potential clients know my expertise, my skills, and why they should work with me or be interested in what I say. So, a professional bio is a must in my industry.",
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
    role: "admin",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s",
    biography:
      "Short professional bios can be just as effective as long ones that detail your accomplishments. Whether you need to work within Twitter’s character count or you’re making career moves on LinkedIn, a well-written short professional bio gives you the chance to make an excellent first impression. Here’s how to turn this brief text into a powerful introduction to your greatest strengths and accomplishments.",
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
    role: "regular",
    photo:
      "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611768.jpg?w=740&t=st=1715211176",
    biography:
      "Suzanne Kane is a race car driver at Hendrick Motorsports with five years’ experience making speedy turns for several hours, helping his thousands of fans to fulfill their entertainment needs. Specializing in left turns and safely overtaking his opponents in the pursuit of a checkered flag, Jerry uses that expertise to never come in last.",
  },
];
