function feetToMile(feet) {
    if(feet == 0 || typeof feet !== "number") {
        var result = 'Invalid';
    }else{
        var oneFeet = 0.00018939  // one feet = 0.00018939 mile
        var result = feet * oneFeet;
    }
    return result;
}



function woodCalculator(chair, table, bed) {
    if(chair == undefined) {
        var chair = 0;
    }
    if(table == undefined) {
        var table = 0;
    }
    if(bed == undefined) {
        var bed = 0;
    }
    if(typeof chair !== "number" || typeof table !== "number" || typeof bed !== "number") {
        var result = 'Invalid';
    }else{
        var oneChairOfWood = 1;
        var oneTableOfWood = 3;
        var oneBedOfWood = 5;
        var chairWoodCount = chair * oneChairOfWood;
        var tableWoodCount = table * oneTableOfWood;
        var bedWoodCount = bed * oneBedOfWood;
        var result = chairWoodCount + tableWoodCount + bedWoodCount;
    }
    return result;
}



function brickCalculator(height) {
    var oneFeet = 1000; 
    if(height == 0 || typeof height !== "number") {
        var result = 'Invalid value! please submit valid value';
    }else if(10 >= height) {
        var roomHeight = 15;
        var totalFeet = roomHeight * height;
        var result = totalFeet * oneFeet;     
    }else if(20 >= height) {
        var heightCount = height - 10
        var roomHeight = 12;
        var totalFeet = roomHeight * heightCount;
        var result = (totalFeet * oneFeet) + 150000;
    }else{
        var heightCount = height - 20;
        var roomHeight = 10;
        var totalFeet = roomHeight * heightCount;
        var result = (totalFeet * oneFeet) + 150000 + 120000;
    }
    return result;
}


function tinyFriend(allFriendName) {
    if(allFriendName == undefined || !Array.isArray(allFriendName)) {
        var result = 'Invalid value! please submit valid value';
    }else{
        var result = allFriendName[0];
        for(var i = 0; i < allFriendName.length; i++) {
            var currentName = allFriendName[i];
            if(currentName.length < result.length) {
                var result = currentName;
            }
        }
    }
    return result;
}