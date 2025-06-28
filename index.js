// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      // Append the ID to the body of the document
      const p = document.createElement("p");
      p.textContent = `ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      // Append error message to the body of the document
      const errorMsg = document.createElement("p");
      errorMsg.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMsg);
    });
}
