class Team {
    constructor(name, trophies, colors, founded, location, stadium) {
      this.name = name;
      this.trophies = trophies;
      this.colors = colors;
      this.founded = founded;
      this.location = location;
      this.stadium = stadium;
    }
}

const teams = [ new Team("Man City", 35, "Sky Blue", 1880, "Manchester, England", "Etihad"),
                new Team("Man United", 68, "Red", 1878, "Manchester, England", "Old Trafford"),
                new Team("Chelsea", 34, "Blue", 1905, "London, England", "Stamford Bridge"),
                new Team("Liverpool", 69, "Red", 1892, "Liverpool, England", "Anfield"),
                new Team("Aston Villa", 25, "Claret & Blue", 1874, "Birmingham, England", "Villa Park")
            ];

function generateResult(bestCategory) {
    alert("Dog");
    const matchedTeam = (() => {
        switch(bestCategory) {
            case "attack":
                return teams[0]; // Man City
            case "story":
                return teams[1]; // Man United
            case "defense":
                return teams[2]; // Chelsea
            case "success":
                return teams[3]; // Liverpool
            case "underdog":
                return teams[4]; // Aston Villa
            default:
                return teams[0]; // Default to Man City
        }
    })(); 

    const results = document.querySelector("#results");
    let info = document.createElement("h2");
    info.textContent = "You should support " + matchedTeam.name;
    info.className = "result-info";
    results.appendChild(info);
}