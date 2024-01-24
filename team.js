const student = [
    { name : "Antonio", surname: "Martinez", 
    age: 25, city: "valencia", 
    hobby: "SimRacing" , favoriteFood: "Pizza",
    favoriteVideoGame: "Bloodborne", favoriteFilm : "Shutter Island",
    favoriteBook: "El resplandor", petName : "Midna"
    },
    { name : "Luis", surname : "Grandini",
    age : 26, city : "Caracas",
    hobby : "Videogames", favoriteFood : "Pizza",
    favoriteVideoGame : "Fire emblem Three houses", favoriteFilm : "La gran apuesta",
    favoriteBook : "El invierno del mundo", petName : ""
    },
    { name:"Pedro", surname:"Grandini",
    age:28, city:"Madrid",
    hobby:"Videojuegos", favoriteFood:"Pasta",
    favoriteVideogame:"The Legend of Heroes", favoriteFilm:"Your Name",
    favoriteBook:"Harry Potter", petName:""
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
- Print if there are some members with the same surname (surname).
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

function NoLoleros(studi){
    const Lolsito = []
    for (let j = 0 ; j < studi.length ; j++){
        let elLol = studi[j].favoriteVideoGame;
        if (elLol == "LOL" || elLol == "League of Legends" ){
            let esUnLolero = studi[j].name + " porque tienes que jugar a " + elLol
            Lolsito.push(esUnLolero);
        }
    }
    return Lolsito;
};
/*let l = 0
function sameSurname(estudi){
    const elSurname = [l]
    for (let k = 0 ; k < estudi.length ; k++){
        let apellido = estudi[k].surname
        if()
    }
}*/
console.log(LasMascotas(student));
console.log(NoLoleros(student));