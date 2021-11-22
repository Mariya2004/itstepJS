// Задание #3
// Рядом с мышью — и гусь велик, но вот рядом с драконом... В этой задаче у нас будут гуси (класс Goose) и драконы (класс Dragon). А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — догадайтесь сами. Затем переопределите для Goose и Dragon метод getSize(), так, чтобы они выводили строки о размере животного.

import {smallAnimal} from './smallAnimal.js';
import {bigAnimal} from './bigAnimal.js';
import {Goose} from './goose.js';
import {Dragon} from './dragon.js';

let goose = new Goose('Вася', 30, 8);
let dragon = new Dragon('Василий', 300, 300);

goose.getSize();
dragon.getSize();


