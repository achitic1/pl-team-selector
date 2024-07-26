class Team {
    constructor(name, trophies, colors, founded, location, stadium, image) {
      this.name = name;
      this.trophies = trophies;
      this.colors = colors;
      this.founded = founded;
      this.location = location;
      this.stadium = stadium;
      this.image = image;
    }
}

const teams = [ new Team("Man City", 35, "skyblue", 1880, "Manchester, England", "Etihad Stadium", "man-city.jpg"),
                new Team("Man United", 68, "red", 1878, "Manchester, England", "Old Trafford", "man-united.jpg"),
                new Team("Chelsea", 34, "blue", 1905, "London, England", "Stamford Bridge", "chelse,jpg"),
                new Team("Liverpool", 69, "red", 1892, "Liverpool, England", "Anfield", "liverpool.jpg"),
                new Team("Aston Villa", 25, "maroon", 1874, "Birmingham, England", "Villa Park", "aston-villa.jpg")
            ];

function generateResult(bestCategory) {
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

    /* Displays the text that shows the result */
    const results = document.querySelector("#results");
    results.classList.remove("hidden");
    
    // Creating the heading with the name 
    let title = document.createElement("h1");
    title.textContent = "You should support:";
    results.appendChild(title);

    // Create the team card 
    let teamCard = document.createElement("div");
    teamCard.classList.add("team-card");

    // Containers to separate data and image
    let statContainer = document.createElement("div");
    let imageContainer = document.createElement("div");
    statContainer.classList.add("stats-container");
    imageContainer.classList.add("image-container");

    for (const [key, value] of Object.entries(matchedTeam)) {
        if (key !== "image") {
            let data = document.createElement("h2");

            let keySpan = document.createElement("span");
            keySpan.textContent = key + ": ";
            
            let valueSpan = document.createElement("span");
            valueSpan.textContent = value;
            valueSpan.style.color = matchedTeam.colors;

            data.appendChild(keySpan);
            data.appendChild(valueSpan);
            statContainer.appendChild(data);
        } else {
            // Create and add the image
            let image = document.createElement("img");
            image.src = "team-photos/" + value; // Set the path
            image.alt = matchedTeam.name + " stadium";
            image.classList.add("team-image");
            imageContainer.appendChild(image);
        }
    }

    teamCard.appendChild(statContainer);
    teamCard.appendChild(imageContainer);

    results.appendChild(teamCard);

    // Create a button to restart the quiz
    let restart = document.createElement("button");
    restart.setAttribute("type", "button");
    restart.textContent = "Restart";
    restart.addEventListener("click", () => {
        location.reload();
    });

    results.appendChild(restart);

    // Hides the answer choices
    const questions = document.querySelector("#questions");
    const startPage = document.querySelector("#start");
    startPage.className = "hidden";
    questions.className = "hidden";
}