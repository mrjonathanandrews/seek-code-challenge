function toggleImg() {
    
    const wraith = document.getElementById('wraith-img-container');
    const barbarian = document.getElementById('barbarian-img-container');
    const toggleImgButton = document.getElementById('toggle-img-button');
    
    if ( wraith.style.display == 'none' ) {
        barbarian.style.display = 'none';
        wraith.style.display = 'block';
        toggleImgButton.value = "Show Barbarian";
    } else if ( barbarian.style.display == 'none' ) {
        barbarian.style.display = 'block';
        wraith.style.display = 'none';
        toggleImgButton.value = "Show Wraith";        
    }
}