

//function sauver() {
   // let nom = document.formulaire.name.value; // Correction du nom de la variable "nom"
    //let email = document.formulaire.email.value;
    //let age = document.formulaire.age.value;
    //let type = document.formulaire.type.value;

   //// console.log(nom, email, age, type);
//}
function sauver() {
    let nom = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let type = document.formulaire.type.value; // Vous aviez une faute de frappe ici (forlulaire au lieu de formulaire)

    if (nom === "") {
        alert("Vous devez informer le nom");

    } else if (email === "") {
        alert("Vous devez informer l'email");

    }else if (age === "") {
        alert("Vous devez informer l'age");

    } else if (type === "") {
        alert("Vous devez informer le type");

    
    } else {
        alert("Vous avez sauvegardé les informations");
        console.log(nom , email , type , age)
    }
}
