function fetchAllStaff(){
  fetch('/staff')
    .then(response => response.json())
    .then(data => {
      const titleElement=document.querySelector('#title');
      titleElement.innerHTML = `We found ${data.length} Staff`;
      const staffListElement=document.querySelector('#staff-list');
      data.forEach(staff => {
        const listItemElement = document.createElement('li');
        listItemElement.innerHTML = `Name: ${staff.name} <br> Email: ${staff.email} <br> Role: ${staff.role}`;
        staffListElement.appendChild(listItemElement);
      });
      console.log(data);
    });
}