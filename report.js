document.querySelector('.form-container').addEventListener('submit', function (e) {
    e.preventDefault(); 


    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const server = document.getElementById('server').value.trim();
    const description = document.getElementById('description').value.trim();
    const receiveEmailCheckbox = document.querySelector('.checkbox input[type="checkbox"]');

    if (!username || !email || !server || !description) {
      alert('User have to fill all fields!');
      return;
    }
    
    if (username.length < 4) {
      alert('Username length must be at least 4 characters!');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      alert('E-mail have to use @gmail.com!');
      return;
    }


    if (username.includes('-') || email.includes('-') || server.includes('-') || description.includes('-')) {
      alert('Field cannot contain "-" character!');
      return;
    }

    if (server != "Asian" && server != "Brazil" && server != "Europe") {
      alert('Please input the valid server [Asian | Brazil | Europe!');
      return;
    }

    if (description.length < 10) {
      alert('Description must be at least 10 characters long!');
      return;
    }

    if (!receiveEmailCheckbox.checked) {
      alert('You must agree to receive email confirmation by checking the box!');
      return;
  }

    alert('Form submitted successfully!');
    setTimeout(() =>{
      location.reload();
    }, 150);
    
})