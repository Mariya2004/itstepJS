var userName = "Вася";
const userLastName = "Пупкин";
var userHeight, userWeight;
userHeight = "180";
userWeight = "0.89";
userWeightKg = userWeight*100;
alert(`Меня зовут ${userName} ${userLastName}. Я вешу ${userWeight} ц. Мой рост - ${userHeight} см.`);

userWeightKg = userWeightKg + 10;
userHeight = userHeight - 2;
alert("Вася Пупкин потолстел и стоптался.");

userName = "Петя";
userWeightKg2 = userWeightKg*2;
alert(`Теперь я ${userName} ${userLastName} и вешу в ${userWeightKg2/userWeightKg} раза больше, чем в молодости.`)
