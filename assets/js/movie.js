fetch('details.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let heure = Math.floor(data.runtime / 60)
        let minute = data.runtime % 60

        for (let objProperty in data) {
            console.log(data[objProperty]);

            if (Array.isArray(data[objProperty])) {
                for (let item of data[objProperty]) {
                    console.log(item);
                    moment.locale("fr")
                    const cardHtml = `<div class="containerTeteLeft">
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="image du film">
        </div>
        <div class="containerTeteRight">
            <div class="textTile">
                <h1>${data.title}<span>(1999)</span></h1>
                <div class="minitet">
                    <p class="iage">16</p>
                    <p>${data.release_date} (FR) </p>
                    <ul>
                        <li>${data.genres[0].name},${data.genres[1].name}</li>
                        <li>${heure} h ${minute}</li>
                    </ul>
                </div>
                <div class="score">
                    <div class="scoreround">
                        <p>${data.vote_average}/10</p>
                    </div>
                    <p class="eval">Score d'évaluation</p>
                </div>
                <button><i class="fa-solid fa-heart"></i></button>
                <button><i class="fa-solid fa-star"></i></button>
                <a href="https://www.youtube.com/watch?v=0ha2XYVC7_s" target="_blank" class="bande"><i class="fa-solid fa-play"></i> Bande annonce</a>
                <div class="synopsis">
                    <p>${data.tagline}</p>
                    <h2>Résume</h2>
                    <p>${data.overview}</p>
                </div>
            </div>
            <div class="createur">
                <div class="creat">
                    <h3>Lilly Wachowski</h3>
                    <h4>Director,Writer</h4>
                </div>
                <div class="creat">
                    <h3>Lana Wachowski</h3>
                    <h4>Director,Writer</h4>
                </div>
            </div>
        </div>
    </div>
                    `;
                    document.getElementById("container").innerHTML = cardHtml;

                }
            }

        }
    }
    )
    .catch(error => console.error('Erreur :', error));



fetch('credits.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let objProperty in data) {
            console.log(data[objProperty]);

            if (Array.isArray(data[objProperty])) {
                for (let item of data[objProperty]) {
                    console.log(item);
                    moment.locale("fr")
                    const cardtml = `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${item.profile_path}" alt="image acteur">
                <div class="footcard">
                    <h4>${item.name}</h4>
                    <p>${item.character}</p>
                </div>
            </div>
        
                    `;
                    document.querySelector(".containerFoot").innerHTML += cardtml;
                }
            }
        }
    }
    )
    .catch(error => console.error('Erreur :', error));