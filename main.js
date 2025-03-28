let pets = [
    {
        name: "Firulai",
        species: "Dog",
        age: 5,
        weight: 12,
        healthStatus: "Healthy"
    }
];

const register = (callback) => {
    let name = prompt("Type your pet's name");
    let species = prompt("Type your pet's species");
    let age = parseInt(prompt("Type your pet's age"));
    let weight = parseFloat(prompt("Type your pet's weight")); 
    let healthStatus = prompt("Type your pet's health status (Healthy, In treatment, Sick)");

    console.log("Registering pet, please wait...");
    setTimeout(() => {
        pets.push({ name, species, age, weight, healthStatus });
        alert("Registration successfully done");
        callback();
    }, 2000);
};

const listPet = (callback) => {
    if (pets.length === 0) {
        alert("There's no pet registered");
        callback();
        return;
    }

    let list = "";
    pets.forEach((p, index) => {
        list += `${index + 1}. Name: ${p.name}, Species: ${p.species}, Age: ${p.age}, Weight: ${p.weight}, Health Status: ${p.healthStatus}\n\n`;
    });

    console.log("Listing pets, please wait...");
    setTimeout(() => {
        alert(list);
        callback();
    }, 2000);
};

const searchPet = (callback) => {
    let name = prompt("Type pet's name to look for");
    let pet = pets.find(m => m.name.toLowerCase() === name.toLowerCase());

    console.log("Searching pet, please wait...");
    setTimeout(() => {
        if (pet) {
            alert(`Pet found:\nName: ${pet.name}\nSpecies: ${pet.species}\nAge: ${pet.age} years\nWeight: ${pet.weight}kg\nHealth Status: ${pet.healthStatus}`);
        } else {
            alert("No pet found.");
        }
        callback();
    }, 2000);
};

const updateHealthStatus = (callback) => {
    let name = prompt("Type pet's name to update");
    let pet = pets.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (pet) {
        let newStatus = prompt("Enter the new status (Healthy, Sick, In treatment):");
        console.log("Updating health status, please wait...");
        setTimeout(() => {
            pet.healthStatus = newStatus;
            alert("Health status successfully updated.");
            callback();
        }, 2000);
    } else {
        alert("No pet found.");
        callback();
    }
};

const deletePet = (callback) => {
    let name = prompt("Type pet's name to delete");
    let ind = pets.findIndex(p => p.name.toLowerCase() === name.toLowerCase());

    if (ind !== -1) {
        console.log("Deleting pet, please wait...");
        setTimeout(() => {
            pets.splice(ind, 1);
            alert("Successfully deleted.");
            callback();
        }, 2000);
    } else {
        alert("No pet found.");
        callback();
    }
};

const exitApp = () => {
    console.log("Closing application, please wait...");
    setTimeout(() => {
        alert("Application closed successfully.");
    }, 2000);
};

const menu = () => {
    let option;
    const showMenu = () => {
        option = prompt("Choose an option:\n1. Register pet\n2. List \n3. Search pet\n4. Change a pet's health status \n5. Delete pet\n6. Leave");

        switch (option) {
            case "1": register(showMenu); break;
            case "2": listPet(showMenu); break;
            case "3": searchPet(showMenu); break;
            case "4": updateHealthStatus(showMenu); break;
            case "5": deletePet(showMenu); break;
            case "6": exitApp(); break;
            default: alert("No valid option. Try again."); showMenu();
        }
    };

    showMenu();
};

menu();
