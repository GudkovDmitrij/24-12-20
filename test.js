"use strict";
//const numberOfFilms = confirm("сколько фильмов ты посмотрел?", "122")
//console.log(numberOfFilms);

const numberOfFilms = +prompt('Сколько фильмов ты посмотрел?', '');
console.log(numberOfFilms);
//alert("сколько фильмов ты посмотрел?", "0//");

const pp = {

count: numberOfFilms,
movis: {},
actors: {},
genres: [],
private: false

};


const a = prompt("Один из полдених просмотренных фильмов?", ""),
b = prompt("На сколько ойените его?", "");
const c = prompt("Один из полдених просмотренных фильмов?", ""),
d = prompt("На сколько ойените его?", "");

pp.movis[a] = b;
pp.movis[c] = d;

console.log(pp);
