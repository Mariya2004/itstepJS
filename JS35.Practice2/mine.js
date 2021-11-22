import {Student} from './student.js';
import {Aspirant} from './aspirant.js';

let student = new Student('Иван', 'Иванов', 4, 4);
let aspirant = new Aspirant ('Петр', 'Петров', 8, 5);

console.log(student.getScholarship());
console.log(aspirant.getScholarship());

let Students = [];

Students.push(student);
Students.push(aspirant);

Students.forEach(function(item) {
    console.log(item.getScholarship());
})




