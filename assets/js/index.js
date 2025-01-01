fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let objProperty in data) {
            console.log(data[objProperty]);

            if (Array.isArray(data[objProperty])) {
                for (let item of data[objProperty]) {
                    console.log(item);

                    document.getElementById("containerMovie").innerHTML +=
                        `<section class="cardMovie">
                            <div class="movie">
                                <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="${item.title}">
                                <h3>${item.title}</h3>
                                <p>${item.release_date}</p>
                                <div class="mooveNote">
                                <div class="note" title="${item.vote_count} votes">${item.vote_average}</div>
                                </div>
                            </div>
                        </section>`;
                }
            }
        }
    })
    .catch(error => console.error('Erreur :', error));

document.querySelector(".swipe").addEventListener("click", () => {
    const tendance = document.querySelector(".tend")
    const week = document.querySelector(".tendweek")

    tendance.classList.add("hidden")
    tendance.classList.remove("visible")

    week.classList.add("visible")
    week.classList.add("hidden")
})