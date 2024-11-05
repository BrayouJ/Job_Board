const submit_button = document.querySelector(".submit_button");

const create_firm = () => {
  const firm_name = document.getElementById("firm_name").value;
  const hq = document.getElementById("hq").value;
  const industry = document.getElementById("industry").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios
    .post("http://localhost:3001/firms", {
      firm_name: firm_name,
      headquarters: hq,
      industry: industry,
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response.data);
      document.location.href = "./signin_firm.html";
    })
    .catch(function (error) {
      console.log(error);
    });
};

submit_button.addEventListener("click", create_firm);
