const student = [
    { name : "Antonio", surname: "Martinez", 
    age: 25, city: "valencia", 
    hobby: "SimRacing" , favouriteFood: "Pizza",
    favouriteVideoGame: "Bloodborne", favouriteFilm : "Shutter Island",
    favouriteBook: "El resplandor", petName : "Midna"
    },

    { name : "Luis", surname : "Grandini",
    age : 26, city : "Caracas",
    hobby : "Videogames", favoriteFood : "Pizza",
    favoriteVideoGame : "Fire emblem Three houses", favoriteFilm : "La gran apuesta",
    favoriteBook : "El invierno del mundo", petName : ""
    },
    { name:"Pedro", surname:"Grandini",
    age:28, city:"Madrid",
    hobby:"Videojuegos", favoritefood:"Pasta",
    favoritevideogame:"The Legend of Heroes", favoritefilm:"Your Name",
    favoritebook:"Harry Potter", petName:""
    },
    { name: "Richard", surname: "Suarez",
    age: 27, city: "Ciudad Real",
    hobby: "Tocar guitarra", favoriteFood: "Hamburguesas",
    favoriteVideoGame: "The Last of Us", favoriteFilm: "Hachiko",
    favoriteBook: "Hábitos Atómicos", petName: "",
    },
];

/*
- Print the team in alphabetical order (surname name).
- Print the team in age order (name age).
- Print the team middle age.
- Print who has a pet (name petName).
- Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name).
- Print if there are some members with the same name (name).
*/
function LasMascotas(estud){
    const laMasc = []
    for (let i = 0 ; i < estud.length ; i++){
        let mascota = estud[i].petName;
        if (typeof(mascota) === "string" && mascota.length > 2){
            let mascotaSi = "La mascota de " + estud[i].name + " se llama " + estud[i].petName;
            laMasc.push(mascotaSi);
        }
    }
    return laMasc;
};
console.log(LasMascotas(student));