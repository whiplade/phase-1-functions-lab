function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - 42;
    } else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distanceInFeet) {
    return distanceFromHqInBlocks(distanceInFeet) * 264;

}

function distanceTravelledInFeet(start, destination) {
   let distance;
   if (destination > start) {
    distance = destination - start;
   } else {
        distance = start - destination;
   }
   return distance * 264;
  }

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distance <= 400){
        return farePrice = 0;
    }
    else if (distance > 400 && distance < 2000){
        return farePrice = 2.56;
    }
    else if (distance > 2000 && distance < 2500){
        return farePrice = 25;
    
    }
    else if (distance > 2500){
        return farePrice = 'cannot travel that far'
    }
    
  }