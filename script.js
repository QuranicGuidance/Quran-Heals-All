function searchAyahs() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    let filteredAyahs = ayahs.filter(ayah => 
        ayah.keywords.some(keyword => keyword.includes(input))
    );

    if (filteredAyahs.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";
    } else {
        filteredAyahs.forEach(ayah => {
            let ayahDiv = document.createElement("div");
            ayahDiv.innerHTML = `<h3>${ayah.arabic}</h3><p>${ayah.translation}</p>`;
            resultsDiv.appendChild(ayahDiv);
        });
    }
}
