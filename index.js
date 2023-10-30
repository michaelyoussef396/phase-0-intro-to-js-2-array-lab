// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop(); 
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCatsArray = [...cats, name];
    return newCatsArray;
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
}