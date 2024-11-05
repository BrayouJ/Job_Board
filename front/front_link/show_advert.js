const requestURL = "http://localhost:3001/adverts";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

function showAdverts(json_obj) {
    const adverts = json_obj;
    const list_advert = document.getElementById("job_list");

    for (let i = 0; i < adverts.length; i++){
        const newElement = document.createElement(`article`);
        newElement.className = "case";
        newElement.innerHTML =
            `
                <h2 class="h2_annonce">
                    ${adverts[i].job_title}
                </h2>
                <p>
                    ${adverts[i].city}<br>
                    <button onclick="readMore(this)" id="button-${i}">Learn More</button>
                </p>
                <p class="more" id="parag-${i}">
                    ${adverts[i].contract_type}<br>
                    ${adverts[i].contract_duration}<br>
                    ${adverts[i].salary}<br>
                    ${adverts[i].date_of_post}<br>
                    ${adverts[i].description}<br>
                    ${adverts[i].degree_required}<br>
                    ${adverts[i].experience}<br>    
                    ${adverts[i].business_hours}<br>
                    <button class="open-button" onclick="openForm(${adverts[i].id_advert})">Apply</button>
                </p>
            `;
        list_advert.appendChild(newElement);
    }
};

request.onload = function () {  
        if (request.status >= 200 && request.status < 300) {
      const adverts = request.response; // Récupère la réponse
      console.log("Réponse reçue :", adverts);
      showAdverts(adverts);
    } else {
      console.error("Erreur de la requête :", request.statusText); // Affiche une erreur en cas de problème
    }
};

const soumettre = (id)=>{
  console.log(id)
};

function readMore(th) {
    const id = th.id.substr(7)
    console.log(id)

    let parag = document.getElementById( 'parag-' + id )
    parag.className = parag.className == "visi" ? "more" : "visi"
}

function openForm(id) {
    const popup = document.getElementsByClassName("form-popup")[0]
    popup.setAttribute('desc', id);
    popup.style.display = "block"
}

function closeForm() {
    const popup = document.getElementsByClassName("form-popup")[0]
    popup.style.display = "none"
}

const send_application = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const message = document.getElementById("message").value
    const id = document.getElementsByClassName("form-popup")[0].getAttribute('desc');

    axios
        .post("http://localhost:3001/applications", {
            id_advert: id,
            email: email,
            password: password,
            message: message,
        })
        .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
}

const submit_button = document.querySelector(".btn");
submit_button.addEventListener("click", send_application);