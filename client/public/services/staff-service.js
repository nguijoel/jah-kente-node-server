function fetchAllStaff() {
  fetch("/staff")
    .then((response) => response.json())
    .then((data) => {
      const titleElement = document.querySelector("#staff-list-title");
      titleElement.innerHTML = `We found ${data.length} Staff`;

      const staffListElement = document.querySelector("#staff-list-items");
      staffListElement.innerHTML = "";

      data.forEach((staff) => {
        // Create a new list item
        const listItemElement = document.createElement("li");

        // Create a link items
        const linkElement = document.createElement("a");

        //Assign a hash href because we don't want to reload the page
        linkElement.href = "javascript:void(0)";

        //Define the HTML of the link
        linkElement.innerHTML = `${staff.name}`;

        //Assign a function to the link that will be called when we click the link
        linkElement.onclick = () => {
          fetchStaffDetail(staff.id);
        };

        //Append the link to the list item
        listItemElement.appendChild(linkElement);

        staffListElement.appendChild(listItemElement);
      });
    });
}

function fetchStaffDetail(id) {
  fetch(`/staff/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const titleElement = document.querySelector("#staff-detail-title");
      const profileElement = document.querySelector("#staff-detail-profile");
      const staffDetailElement = document.querySelector(
        "#staff-detail-content",
      );

      profileElement.src = data.photo;
      titleElement.innerHTML = `
      ${data.name}<br>
     <small>${data.role}</small><br>
      <small>${data.email}</small>
      `;
      staffDetailElement.innerHTML = data.biography;
    });
}
