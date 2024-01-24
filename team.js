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
    hobby:"Videojuegos", favoritefood:"Pasta",
    favoritevideogame:"The Legend of Heroes", favoritefilm:"Your Name",
    favoritebook:"Harry Potter", petname: ""
    },
    { name: "Richard", surname: "Suarez",
    age: 27, city: "Ciudad Real",
    hobby: "Tocar guitarra", favoriteFood: "Hamburguesas",
    favoriteVideoGame: "The Last of Us", favoriteFilm: "Hachiko",
    favoriteBook: "Hábitos Atómicos", petName: ""
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


function orden(estudiante) {
    student.sort((o1, o2) => {
        if (o1.surname < o2.surname) {
            return -1
        } else if (o1.surname > o2.surname) {
            return 1
        } else {
            return 0
        }
    })
}

orden(student)

for (let index = 0; index < student.length; index++) {
    let apellidos = student[index].surname + " " + student[index].name
    console.log(apellidos);
}

function promedio(edad) {
    let average=0
    for (let index = 0; index < edad.length; index++) {
        let prom = edad[index].age 
        average = (average + prom)
        
    }
    let final_average = average/4
    return final_average
 }

console.log(promedio(student));

