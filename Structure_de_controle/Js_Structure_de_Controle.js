function Zomme() {

    nb1 = Number(document.getElementById("nb1").value);//recupère la  valeur saisie et la donne en temps que valeur de nb1
    //console.log(nb1);
    nb2 = Number(document.getElementById("nb2").value);
    //console.log(nb2);
    nb3 = Number(document.getElementById("nb3").value);
    //console.log(nb3);
    somme = nb1 + nb2 + nb3;//additionne les 3 varialbe 
    console.log(somme);//affiche dans la console la valeur de somme 
    document.getElementById("somme").value = somme; //donne comme valeur au champ de saisie avec l'id somme la variable de la variable somme 

}

function Prd() {

    nb1 = Number(document.getElementById("nb1").value);//recupère la  valeur saisie et la donne en temps que valeur de nb1
    //console.log(nb1);
    nb2 = Number(document.getElementById("nb2").value);
    //console.log(nb2);
    nb3 = Number(document.getElementById("nb3").value);
    //console.log(nb3);
    produit = nb1 * nb2 * nb3;//multiplie les 3 variables
    console.log(produit);//affiche dans la console la valeur de produit
    document.getElementById("produit").value = produit;//donne comme valeur au champ de saisie avec l'id produit la variable de la variable produit
}

function Moy() {

    nb1 = Number(document.getElementById("nb1").value);//recupère la  valeur saisie et la donne en temps que valeur de nb1
 
    nb2 = Number(document.getElementById("nb2").value);
    //console.log(nb2);
    nb3 = Number(document.getElementById("nb3").value);
    //console.log(nb3);
    moyenne = (nb1 + nb2 + nb3) / 3;//calcule la moyenne
    console.log(moyenne);//affiche dans la console la valeur de somme
    document.getElementById("moyenne").value = moyenne;//donne comme valeur au champ de saisie avec l'id moyenne la variable de la variable moyenne 

}

function Max() {

    nb1 = Number(document.getElementById("nb1").value);//recupère la  valeur saisie et la donne en temps que valeur de nb1
    //console.log(nb1);
    nb2 = Number(document.getElementById("nb2").value);
    //console.log(nb2);
    nb3 = Number(document.getElementById("nb3").value);
    //console.log(nb3);
    max = nb1;//mac prend la valeur de nb1 
    if (max < nb2) {//comparaison de max avec nb2 et si nb2>max max prendra la valuer de nb2
        max = nb2
    }
    if (max < nb3) {//comparaison de max avec nb3 et si nb3>max max prendra la valuer de nb3
        max = nb3
    }

    document.getElementById("max").value = max;//donne comme valeur au champ de saisie avec l'id max la variable de la variable max
}

function TVA() {
    prixht = Number(document.getElementById("prixht").value);//récupération de la valeur saisis dans l'input prixht et affectation dans prix ht 
    //console.log(prixht);
    nbexp = Number(document.getElementById("nbexp").value);
    //console.log(nbexp);
    tva = Number(document.getElementById("tva").value);
    //console.log(tva);
    totalht = (prixht * nbexp)//calcule du prix hors taxe fois le nombre d'exemplaire 
    mtva = totalht * tva;//calcule du pour obtenir le montant de la tva 
    prixttc = totalht + mtva//addition du prix total ht plus le montant de la tva 
    document.getElementById("prixttc").value = prixttc;//donne comme valeur au champ de saisie avec l'id mprixttc la valeur de la variable prixttc
}





function validation() {//permet de verifier su c'est un verbe du premier groupe en cerifiant si la terminaison est bien er 
    while (TabVerbe != "er") {
        alert("ce n'est pas un verbe du premier groupe")
        Verbe = prompt(" quel est votre verbe ?");
        document.getElementById("verbe").value = Verbe;
        TabVerbe = [Verbe.substring(Verbe.length - 2, Verbe.length)];
    }
}

function conjugaison() {

    Verbe = document.getElementById("verbe").value;//recpération du verbe et affectation
    TabVerbe = [Verbe.substring(Verbe.length - 2, Verbe.length)];//avoir le radicale du verbe 
    validation();//verification si c'est un vb du 1er groupe
    baseVerbe = Verbe.substring(0, Verbe.length - 2);//retire lka terminaison 
    TabPersonne = ["je ", "tu ", "il, elle, on ", "nous ", "vous ", "ils, elles "];//tableau des pronom 
    TabTerminaison = ["e", "es", "e", "ons", "ez", "ent"];//tableau des perosnne

    if (Verbe.substring(0, 1) == "a" ||//en cas de presence de voyelle remplacer je par j'
        Verbe.substring(0, 1) == "e" ||
        Verbe.substring(0, 1) == "i" ||
        Verbe.substring(0, 1) == "o" ||
        Verbe.substring(0, 1) == "u" || Verbe.substring(0, 1) == "y") {
        TabPersonne[0] = "j'";
    }
    for (i = 0; i <= TabPersonne.length - 1; i++) {//afficher la cinjugaison du verbe 
        //document.getElementById("conjugfin").value=("\n"+TabPersonne[i]+baseVerbe+TabTerminaison[i]);
        document.write(TabPersonne[i], " ", baseVerbe + TabTerminaison[i], "<br>");
        console.log(TabPersonne[i], baseVerbe + TabTerminaison[i]);
    }
}

function initiale() {
    prenom = document.getElementById("prenom").value;//récupération de la valeur saisis dans l'input  et affectation dans prenom et nom
    console.log(prenom);
    nom = document.getElementById("nom").value;
    console.log(nom);
    fprenom = prenom.substring(0, 1);//recuperation de la premiere lettre
    console.log(fprenom);
    fnom = nom.substring(0, 1);//recuperation de la premiere lettre
    console.log(fnom);
    document.getElementById("Initiale").value = fprenom + (".") + fnom;//affiche le résultat

}

function palindrome() {
    const string = document.getElementById("mot").value;//récupération du mot
    
    //Convertis la chaine de caractères en tableau
    const arrayValues = string.split('');

    // Reverse les valeurs du tableau
    const reverseArrayValues = arrayValues.reverse();

    // Convertis le tableau en chaine de caractères
    const reverseString = reverseArrayValues.join('');
    //Affiche si c'est un palindrome ou non
    if (string == reverseString) {//si les deux mot son egaux afficher c'est un palindrome sinon afficher ce n'est pas un palindrome
        document.getElementById("palindrome").value = ('C \'est un palindrome');
    } else {
        document.getElementById("palindrome").value = ('Ce n \'est pas un palindrome');
    }
}

//echec
/*function verifpositif() {
    var diviseur;
    nbr1 = Number(document.getElementById("nbr1").value);
    nbr2 = Number(document.getElementById("nbr2").value);
    nbr3 = Number(document.getElementById("nbr3").value);
    nbr4 = Number(document.getElementById("nbr4").value);

    a = (Math.sign(nbr1));
    console.log(a);
    b = (Math.sign(nbr2));
    console.log(b);
    c = (Math.sign(nbr3));
    console.log(c);
    d = (Math.sign(nbr4));
    console.log(d);
if (a===1){
    diviseur=+1
} else if (a===("-1")){
    diviseur+0
}
    
    
console.log(typeof (diviseur));
console.log(diviseur);
}





function moyennepositif() {
    nbr1 = Number(document.getElementById("nbr1").value);
    console.log(nbr1);
    nbr2 = Number(document.getElementById("nbr2").value);
    console.log(nbr2);
    nbr3 = Number(document.getElementById("nbr3").value);
    console.log(nbr3);
    nbr4 = Number(document.getElementById("nbr4").value);
    console.log(nbr4);
    moyenne = (nbr1 + nbr2 + nbr3 + nbr4) / 4;
    console.log(moyenne);
    if (nbr1 <= 0 || nbr2 <= 0 || nbr3 <= 0 || nbr4 <= 0) {

    }
    document.getElementById("moy").value = moyenne;

}*/

function enfant() {
    age = Number(document.getElementById("age").value)//recuperation de la valeur
    console.log(age)

    switch (true) {

        case age == 6 || age == 7://cas ou l'age est entre 6 et 7 retour poussin 
            document.getElementById("categorie").value = ("Poussin");
            break;
        case age == 8 || age == 9://cas ou l'age est entre 8 et 9 retour Pupille
            document.getElementById("categorie").value = ("Pupille");
            break;
        case age == 10 || age == 11://cas ou l'age est entre 10 et 11 retour Minime
            document.getElementById("categorie").value = ("Minime");
            break;
        case age >= 12 && age <= 17://cas ou l'age est entre 12 et 17 retour Cadet
            document.getElementById("categorie").value = ("Cadet");
            break;

        default:
            document.getElementById("categorie").value = ("error");//cas pas défalut qui permet d'afficher error en cas de saisis de nombre non compris entre 6 et 17
    }
}

function chiffre() {//fonction pour changer le style selon  si la reponse est comprise entree 0 et 5
    a = document.getElementById("chiffre").value
    if (a >= 1 && a <= 5) {
        document.getElementById("chiffre").style = ("border:solid 1px;color : darkgreen;")
    } else {
        document.getElementById("chiffre").style = ("border:solid 1px; color: red;");
    }
}



rep = Math.round(Math.random() * 100) + 1;//alea entre 0 et 100 
y = 0;//var y defibis a 0

function Justeprix() {
    reponse = document.getElementById("reponse").value;
    if (reponse > rep) {//cvomparaison de la valeur saisis ezt celle choisis par le randome  
        document.getElementById("indice").value = ("Trop grand");
        y += 1;//incrementation du nombre d'essaie
        console.log(y)
    } else if (reponse < rep) {
        document.getElementById("indice").value = ("Trop petit");
        y += 1;
        console.log(y)
    } else {
        y += 1
        console.log(y)
        document.getElementById("indice").value = ("C'est juste votre nombre d'essaies est " + y);//affichage résultat
    }
}

function abandon() {
    document.getElementById("indice").value = ("La réponse étais " + rep);//en cas d'abandon pour afficher la valeur de rep
}

function mois() {
    chiffre = document.getElementById("nbr").value// récupération de la valeur saisis

    switch (true) {//selon la valeur de chiffre on dit ce quon fait grace au switch case 

        case chiffre == 1:
        document.getElementById("mois").value = ("Janvier");
        break;

        case chiffre == 2:
        document.getElementById("mois").value = ("Février");
        break;

        case chiffre == 3:
        document.getElementById("mois").value = ("Mars");
        break;

        case chiffre == 4:
        document.getElementById("mois").value = ("Avril");
        break;

        case chiffre == 5:
        document.getElementById("mois").value = ("Mai");
        break;

        case chiffre == 6:
        document.getElementById("mois").value = ("Juin");
        break;

        case chiffre == 7:
        document.getElementById("mois").value = ("Juillet");
        break;

        case chiffre == 8:
        document.getElementById("mois").value = ("Août");
        break;

        case chiffre == 9:
        document.getElementById("mois").value = ("Septembre");
        break;

        case chiffre == 10:
        document.getElementById("mois").value = ("Octobre");
        break;

        case chiffre == 11:
        document.getElementById("mois").value = ("Novembre");
        break;

        case chiffre == 12:
        document.getElementById("mois").value = ("Décembre");
        break;

        default:
            document.getElementById("mois").value = ("N'est pas un mois");
    }
}
