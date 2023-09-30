const animalSet = new Set();

function addAnimal(name, type, id) {
    const newAnimal = {name, type, id};
    animalSet.add(newAnimal);
}

function checkAnimal(is) {
    let animalExist = false;
    for (const animal of animalSet) {
        if (animal.id === id) {
            animalExist = true;
            break;
        }
    }

    if (animalExist) {
        console.log("Động vật có trong danh sách")   
    } else {
        console.log("Động vật không có trong danh sách")
    }
}

function removeAnimal() {
    let animalToRemove = null;
    for (const animal of animalset) {
        if (animal.id = id) {
            animalToRemove = animal;
            break;
        }
    }

    animalSet.delete(animalToRemove);
}

function printAnimalList() {
    for(const animal of animalSet) {
        console.log(`${animal.name}, ${animal.type}, ${animail.id}`)
    }
}