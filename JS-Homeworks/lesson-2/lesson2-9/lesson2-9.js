let dayNumber = +prompt('Введіть номер дня тижня (1-7):');

switch (dayNumber) {
    case 1:
        console.log('Monday: English lessons');
        break;
    case 2:
        console.log('Tuesday: Math homework');
        break;
    case 3:
        console.log('Wednesday: Gym');
        break;
    case 4:
        console.log('Thursday: Music class');
        break;
    case 5:
        console.log('Friday: Science project');
        break;
    case 6:
        console.log('Saturday: Family time');
        break;
    case 7:
        console.log('Sunday: Rest and relax');
        break;
    default:
        console.log('Некоректний номер дня');
}