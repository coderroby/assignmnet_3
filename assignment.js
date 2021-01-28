//https://github.com/coderroby/asssignment3

function kilometerToMeter(n) {
    if (n < 0) {
        console.log("Distance can not be negetive number.");
    }
    else {
        var meter = n * 1000;
        return meter;
    }
}


function budgetCalculator(ghori, phone, laptop) {
    if (ghori > 0 && phone > 0 && laptop > 0) {
        var total = 0;
        total = (ghori * 50) + (phone * 100) + (laptop * 500);
        return total;

    }
    else {
        console.log("You have inputed negative value.")
    }

}


function hotelCost(day) {
    if (day > 0) {
        var totalcost = 0;
        var dayMoreThenTen = day - 10;
        var dayMoreThenTwenty = day - 20;
        if (day <= 10) {
            totalcost = day * 100;
        }
        else if (day <= 20) {
            var dayMoreThenTen = day - 10;
            totalcost = (dayMoreThenTen * 80) + 1000;
        }
        else {
            totalcost = (dayMoreThenTwenty * 50) + 1800;
        }
        return totalcost;

    }
    else {
        console.log("Please stay at least 1 day either the cost will not visible.")
    }

}


function megaFriend(str) {
    if (str.length != 0) {
        let long = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i].length > long.length)
                long = str[i];
        }
        return long;
    }
    else {
        console.log("your Array is empty");
    }
}

