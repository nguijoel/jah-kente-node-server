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
          // You might want to implement a function to fetch and display user
          fetchUserDetail(user.id);
        };

        //Append the link to the list item
        listItemElement.appendChild(linkElement);

        userListElement.appendChild(listItemElement);
      });
    });
}

function fetchUserDetail(id) {
  fetch(`/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const titleElement = document.querySelector("#user-detail-title");
      const profileElement = document.querySelector("#user-detail-profile");
      const userDetailElement = document.querySelector("#user-detail-content");

      profileElement.src = data.photo || "/assets/images/no-photo.png";
      
      titleElement.innerHTML = `
      ${data.name}<br>
       <small>${data.email}</small>
      `;
        userDetailElement.innerHTML = data.biography || "No biography";

      if(!data.biography) userDetailElement.classList.add("no-content");
    });
}
