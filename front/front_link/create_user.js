const submit_button = document.querySelector(".submit_button");

const create_user = () => {
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cv = document.getElementById("cv").value;
  const degree = document.getElementById("degree").value;
  const phone = document.getElementById("phone").value;

  axios
    .post("http://localhost:3001/users", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      cv: cv,
      degree: degree,
      phone: parseInt(phone),
    })
    .then(function (response) {
      console.log(response.data);
      document.location.href="./signin_user.html"
    })
    .catch(function (error) {
      console.log(error);
    });
};

submit_button.addEventListener("click", create_user);
