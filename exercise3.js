
let dayNumber = 3;

switch (dayNumber) {
    case 0:
    case 6:
        console.log("It is the weekend!");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It is the weekday!");
        break;
    default:
        console.log("Invalid day number");
        break;
}

