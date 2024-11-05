axios.get("http://localhost:3001/apply")
    .then(function (response) {
    const replies = response.data;
    show_applications(replies);
    });

function show_replies(json_obj) {
    const replies = json_obj;
    const main = document.getElementById("main_body");

    for (let i = 0; i < replies.length; i++){
        const newElement = document.createElement(`article`);
        newElement.innerHTML =
            `
                <p>
                    ${replies[i].job_title}
                    ${replies[i].firm_name}
                    ${replies[i].message}
                </p>
            `;
        main.appendChild(newElement);
    }
}