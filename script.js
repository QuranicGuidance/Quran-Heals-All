const ayahs = [
    { arabic: "الحمد للہ رب العالمین", translation: "All praise is due to Allah, the Lord of all the worlds.", keywords: ["praise", "lord", "worlds"] },
    { arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًۭا", translation: "Indeed, with hardship comes ease.", keywords: ["hardship", "ease", "difficulty"] },
    { arabic: "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ", translation: "And establish prayer.", keywords: ["prayer", "salah", "worship"] }
];

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
