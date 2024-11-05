axios.get("http://localhost:3001/adverts")
    .then(function (response) {
    const adverts = response.data;
    show_advert_firm_side(adverts);
    });

function show_advert_firm_side(json_obj) {
    const adverts = json_obj;
    const main = document.getElementById("main_body");

    for (let i = 0; i < adverts.length; i++){
        const newElement = document.createElement(`article`);
        newElement.innerHTML =
            `
                <p>
                    ${adverts[i].job_title}<br>
                    ${adverts[i].city}<br>
                    ${adverts[i].contract_type}<br>
                    ${adverts[i].contract_duration}<br>
                    <button onclick="delete_ad(${adverts[i].id_advert})" id="button-${i}">Delete</button>
                </p>
            `;
        main.appendChild(newElement);
    }
}

function delete_ad(id) {
    const id_advert = id;

    axios
        .delete("http://localhost:3001/adverts/" + id_advert)
        .then(response => {
            console.log("Advert deleted successfully:", response.data);
        })
        .catch(error => {
            console.error("Error deleting advert:", error);
        });
    
    window.location.reload();
}