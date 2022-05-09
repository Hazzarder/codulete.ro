function fetchMagazine() {
    fetch('src/magazine.json')
    .then (response =>{
        return response.json();
    })
    .then(data =>{
        const html = data.map(magazine => {
            return `        <div class="magazin">
            <img src="${magazine.logo}" alt="">
            <div class="scris"><p>${magazine.descriere}</p></div>
            <div class="btnn"><a href="/${magazine.name}.html"><button>Vezi Reducerile</button></a></div>
        </div>`
        }).join('');

        document.querySelector('#magazinee')
        .insertAdjacentHTML("afterbegin", html)
    }).catch(error => {
        console.log(error);
    })
}
fetchMagazine();
