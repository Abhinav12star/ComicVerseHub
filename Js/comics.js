// Comic Book Data
const comics = [
    {
        id: 1,
        title: "The Amazing Spider-Man #850",
        publisher: "Marvel",
        genre: "Superhero",
        price: 4.99,
        rating: 4.8,
        image: "/images/spiderman.jpg",
        synopsis: "Peter Parker swings into action...",
        creators: "Written by Zeb Wells, Art by John Romita Jr.",
        releaseDate: "2024-10-15",
        featured: true
    },
    {
        id: 2,
        title: "Batman: Detective Comics #1000",
        publisher: "DC",
        genre: "Superhero",
        price: 5.99,
        rating: 4.9,
        image: "/images/batman.jpg",
        synopsis: "The World's Greatest Detective faces...",
        creators: "Written by Tom King, Art by Tony S. Daniel",
        releaseDate: "2024-10-20",
        featured: true
    },
    {
        id: 3,
        title: "Wonder Woman #800",
        publisher: "DC",
        genre: "Superhero",
        price: 4.99,
        rating: 4.7,
        image: "/images/wonderwoman.jpg",
        synopsis: "Diana Prince defends truth and justice...",
        creators: "Written by Tom King, Art by Daniel Sampere",
        releaseDate: "2024-10-18",
        featured: false
    },
    {
        id: 5,
        title: "The Flash: Speed Force #1",
        publisher: "DC",
        genre: "Superhero",
        price: 4.49,
        rating: 4.5,
        image: "/images/flash.jpg",
        synopsis: "Barry Allen races through time...",
        creators: "Written by Joshua Williamson, Art by Carmine Di Giandomenico",
        releaseDate: "2024-10-22",
        featured: false
    },
    {
        id: 6,
        title: "Saga Volume 10",
        publisher: "Image",
        genre: "Sci-Fi",
        price: 14.99,
        rating: 4.9,
        image: "/images/saga.jpg",
        synopsis: "An epic space opera...",
        creators: "Written by Brian K. Vaughan, Art by Fiona Staples",
        releaseDate: "2024-10-01",
        featured: false
    },
    {
        id: 7,
        title: "The Walking Dead Deluxe #75",
        publisher: "Image",
        genre: "Horror",
        price: 3.99,
        rating: 4.7,
        image: "/images/walkingdead.jpg",
        synopsis: "In a world ruled by the dead...",
        creators: "Written by Robert Kirkman, Art by Charlie Adlard",
        releaseDate: "2024-09-25",
        featured: false
    },
    {
        id: 8,
        title: "Thor: God of Thunder #25",
        publisher: "Marvel",
        genre: "Fantasy",
        price: 5.99,
        rating: 4.8,
        image: "/images/thor.jpg",
        synopsis: "The Mighty Thor wields Mjolnir...",
        creators: "Written by Jason Aaron, Art by Esad Ribić",
        releaseDate: "2024-10-12",
        featured: true
    },
    {
        id: 11,
        title: "Black Panther #1",
        publisher: "Marvel",
        genre: "Superhero",
        price: 4.99,
        rating: 4.9,
        image: "/images/blackpanther.jpg",
        synopsis: "T'Challa, King of Wakanda...",
        creators: "Written by Eve L. Ewing, Art by Chris Allen",
        releaseDate: "2024-11-01",
        featured: false
    },
    {
        id: 12,
        title: "Aquaman: King of Atlantis #1",
        publisher: "DC",
        genre: "Superhero",
        price: 4.49,
        rating: 4.6,
        image: "/images/aquaman.jpg",
        synopsis: "Arthur Curry must unite the surface world...",
        creators: "Written by Jeremy Adams, Art by John Timms",
        releaseDate: "2024-10-30",
        featured: false
    },
    {
        id: 15,
        title: "Green Lantern #1",
        publisher: "DC",
        genre: "Superhero",
        price: 4.99,
        rating: 4.8,
        image: "/images/greenlantern.jpg",
        synopsis: "Hal Jordan and the Green Lantern Corps...",
        creators: "Written by Jeremy Adams, Art by Xermanico",
        releaseDate: "2024-11-08",
        featured: false
    },
    {
        id: 16,
        title: "Spawn #350",
        publisher: "Image",
        genre: "Horror",
        price: 7.99,
        rating: 4.8,
        image: "/images/spawn.jpg",
        synopsis: "Al Simmons returns from Hell...",
        creators: "Written by Todd McFarlane, Art by Carlo Barberi",
        releaseDate: "2024-10-10",
        featured: false
    },
    {
        id: 17,
        title: "Avengers #1",
        publisher: "Marvel",
        genre: "Superhero",
        price: 5.99,
        rating: 4.9,
        image: "/images/avengers.jpg",
        synopsis: "Earth's Mightiest Heroes assemble...",
        creators: "Written by Jed MacKay, Art by C.F. Villa",
        releaseDate: "2024-11-12",
        featured: false
    },
    {
        id: 18,
        title: "Justice League #75",
        publisher: "DC",
        genre: "Superhero",
        price: 5.99,
        rating: 4.8,
        image: "/images/justiceleague.jpg",
        synopsis: "The World's Greatest Heroes face the Dark Army...",
        creators: "Written by Brian Michael Bendis, Art by David Marquez",
        releaseDate: "2024-11-15",
        featured: false
    },
    {
        id: 19,
        title: "Daredevil #1",
        publisher: "Marvel",
        genre: "Superhero",
        price: 4.99,
        rating: 4.9,
        image: "/images/daredevil.jpg",
        synopsis: "Matt Murdock is back in Hell's Kitchen...",
        creators: "Written by Saladin Ahmed, Art by Aaron Kuder",
        releaseDate: "2024-11-20",
        featured: false
    },
    {
        id: 20,
        title: "The Sandman: Overture Deluxe",
        publisher: "DC",
        genre: "Fantasy",
        price: 29.99,
        rating: 4.9,
        image: "/images/sandman.jpg",
        synopsis: "Neil Gaiman returns to the world of dreams...",
        creators: "Written by Neil Gaiman, Art by J.H. Williams III",
        releaseDate: "2024-09-20",
        featured: false
    }
];

// Function to display comics on a webpage
function displayComics() {
    const container = document.getElementById("comic-container");
    container.innerHTML = ""; // Clear container before adding

    comics.forEach(comic => {
        const comicCard = document.createElement("div");
        comicCard.className = "comic-card";

        comicCard.innerHTML = `
            <img src="${comic.image}" alt="${comic.title}" class="comic-image">
            <h3 class="comic-title">${comic.title}</h3>
            <p class="comic-synopsis">${comic.synopsis}</p>
            <p class="comic-details">
                <strong>Publisher:</strong> ${comic.publisher} |
                <strong>Genre:</strong> ${comic.genre} |
                <strong>Price:</strong> $${comic.price} |
                <strong>Rating:</strong> ${comic.rating} ⭐
            </p>
        `;

        container.appendChild(comicCard);
    });
}

// Display comics when page loads
document.addEventListener("DOMContentLoaded", displayComics);
