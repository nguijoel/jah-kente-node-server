function fetchAllUsers() {
  fetch("/users")
    .then((response) => response.json())
    .then((data) => {
      const titleElement = document.querySelector("#user-list-title");
      titleElement.innerHTML = `We found ${data.length} Users`;

      const userListElement = document.querySelector("#user-list-items");
      userListElement.innerHTML = "";

      data.forEach((user) => {
        // Create a new list item
        const listItemElement = document.createElement("li");

        // Create a link items
        const linkElement = document.createElement("a");

        //Assign a hash href because we don't want to reload the page
        linkElement.href = "javascript:void(0)";

        //Define the HTML of the link
        linkElement.innerHTML = `${user.name}`;

        //Assign a function to the link that will be called when we click the link
        linkElement.onclick = () => {
          // You might want to implement a function to fetch and display user details here, similar to `fetchStaffDetail`
        };

        //Append the link to the list item
        listItemElement.appendChild(linkElement);

        userListElement.appendChild(listItemElement);
      });
    });
}