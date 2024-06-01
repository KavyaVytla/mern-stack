function getCarSpeed(speed){

    let result;
    switch(speed){
        case (speed<=0):
            result="car is not moving";
            break;
        case(speed>0 && speed<=20):
            result ="car is moving very slow";
            break;
        case(speed>20 && speed<=60):
            result="car is moving with moderate speed";
            break;
        case(speed>60 && speed<=100):
            result="car is moving fast";
            break;
        case(speed>100):
            result="car is overspeeding";
            break;
    }
    return result;
}

let speed=80;
//console.log(getCarSpeed(speed))

let day;
let dayName;

switch(day){
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="wednesday";
        break;
    case 4:
        dayName="thursday";
        break;
    case 5:
        dayName="Friday";
        break;
    case 6:
        dayName="saturday";
        break;
    case 7:
        dayName="sunday";
        break;     
    default:
        dayName="please give valid input"                       
}
//console.log(dayName)


//console.log(new Date().getDay())
//switch(new Date().getDay())

