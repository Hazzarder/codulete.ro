 
 async function loadMagazin() {
    const response = await fetch('src/magazine.json');
    const magazine = await response.json();
    console.log(magazine);
    
}
loadMagazin();




