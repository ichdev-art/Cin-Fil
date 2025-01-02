fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let objProperty in data) {
            console.log(data[objProperty]);

            if (Array.isArray(data[objProperty])) {
                for (let item of data[objProperty]) {
                    console.log(item);
                    moment.locale("fr")
                    document.getElementById("containerMovie").innerHTML +=
                        `<section class="cardMovie">
                            <div class="movie">
                                <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="${item.title}">
                                <h3>${item.title}</h3>
                                <p>${moment(item.release_date).format("LL")}</p>
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

document.getElementById("containerMovie").addEventListener("wheel", (e) => {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
})