/**
 * @name hello.node
 * @desc Juste pour les algorithmes
 * @author Aélion - Déc. 2018
 * @version 1.0.0
 */

/**
 * Retourne la valeur maximum entre deux valeurs
 * @param {*} currentMax Valeur maximum courante
 * @param {*} value Valeur lue dans le tableau
 * @return number Valeur la plus elevée entre currentMax et value
 */
function max(currentMax, value) {
    console.log('Compare: ' + currentMax + ' à ' + value);
    if (value > currentMax) {
        return value;
    } else {
        return currentMax;
    }
}
/**
* Retourne la valeur minimum entre deux valeurs
* @param {*} currentMin
* @param {*} value
* @return number Valeur minimum entre currentMin et value
*/

function min(currentMin, value) {
    console.log('Compare: ' + currentMin + ' à ' + value);
    if (value < currentMin) {
        return value;
    } else {
        return currentMin;
    }
}
/**
* Retourne la valeur minimum entre deux valeurs
* @param {*} current
* @param {*} value
* @param {*} wantMax
*/
function minOrMax(current, value, wantMax = true) {
    if (wantMax) {
        return max(current, value);
    }
    return min(current, value);
}

/**
 * @var array
 * Tableau de nombres entiers
 */
const tablo = [25, 50, 256, 312, 3, 22, 8];

/**
 * @var number
 * valeur maximum du tableau
 */

let total = 0;
let maxIs = tablo[0];
let minIs = tablo[0];
let nvTablo = [];
let indice = 0;

// Boucle de parcours du tableau
while (tablo.length > 0) {
    for (let i = 0; i < tablo.length; i++) {
        //  if (tablo[i] % 2 == 0) {
        //    console.log('Indice ' + i + ' est pair ' + tablo[i]);
        //} else {
        //  console.log(tablo[i] + ' est impair');
        //}
        // total des valeurs
        //total = total + tablo[i];
        //si l'indice est sup à 0, controler la valeur maxi et mini
        //if (i > 0) {
        //  maxIs = minOrMax(maxIs, tablo[i]);
        //minIs = minOrMax(minIs, tablo[i], false);
        if (tablo[i] < minIs) {
            minIs = tablo[i];
            indice = i;
        }
        
    }
    console.log(minIs + '(' + indice + ')');
    nvTablo.push(minIs);
    tablo.splice(indice, 1);
    minIs = 99999;
    console.log(tablo);
}

//console.log('Le max est ' + maxIs);
//console.log('La somme est ' + total);
//console.log('Valeur maximum: ' + maxIs + ', Minimum: ' + minIs + ', Total: ' + total);
console.log(nvTablo);