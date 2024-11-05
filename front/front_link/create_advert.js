const submit_button = document.querySelector(".submit_button");

const create_adverts = () => {
  const job_title = document.getElementById("job_title").value;
  const city = document.querySelector(".city").value;
  const contract_type = document.querySelector(".contract_type").value;
  const contract_duration = document.querySelector(".contract_duration").value;
  const salary = document.querySelector(".salary").value;
  const description = document.querySelector(".description").value;
  const degree_required = document.querySelector(".degree_required").value;
  const experience = document.querySelector(".experience").value;
  const business_hours = document.querySelector(".business_hours").value;

  axios
    .post("http://localhost:3001/adverts", {
      job_title: job_title,
      id_firm: "1",
      city: city,
      contract_type: contract_type,
      contract_duration: contract_duration,
      salary: parseInt(salary),
      description: description,
      degree_required: degree_required,
      experience: experience,
      business_hours: business_hours,
    })
    .then(function (response) {
      console.log(response.data);
      document.location.href ="./homepage_firm.html"
    })
    .catch(function (error) {
      console.log(error);
    });
};

submit_button.addEventListener("click", create_adverts);
