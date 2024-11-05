axios.get("http://localhost:3001/applications")
    .then(function (response) {
    const applications = response.data;
    show_applications(applications);
    });

function show_applications(json_obj) {
    const applications = json_obj;
    const main = document.getElementById("main_body");

    for (let i = 0; i < applications.length; i++){
        const newElement = document.createElement(`article`);
        newElement.innerHTML =
            `
                <p>
                    ${applications[i].job_title}
                    ${applications[i].firm_name}
                    ${applications[i].message}
                </p>
            `;
        main.appendChild(newElement);
    }
}