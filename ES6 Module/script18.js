/* ------------- ES6 Module ------------------

    ES6 Module - An external file that contains reusable code that
                 can be imported into other JavaScript filse.
                 Write reusable code for many different apps.
                 can contain variables, classes, functions....
                 and more Introduced as part of ECMAScript 2015 update.*/


import {PI, getArea, getVolume, getCircum} from './mathUtil.js';

console.log(PI);

const circumference = getCircum(10);
const Area = getArea(10);
const Volume = getVolume(10);

console.log(`Circumference is : ${circumference} cm`);
console.log(`Area is : ${Area} cm^2`);
console.log(`Volume is : ${Volume} cm`);