//write first method
function sleep_in(weekday,vacation) {
    var sleepIn = true;

    if (weekday === true && vacation === false) {
        sleepIn = false ;
    }

    return sleepIn ;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    var trouble = false ;

    if (a_smile === b_smile) {
        trouble = true ;
    }

    return trouble ;
}

//caught speeding
function caughtSpeeding(s, b) {
    var p ;== if (b === true) {
        if(s <= 65) {
            0 = true ;
        }
        if (s === 66 || s === 84) {
            1 = true ;
        }
        if (s > 84){
            2 = true ;
        }
    } else {
        if (s <= 60) {
            0 = true ;
        }
        if (s === 61 || s === 80) {
            1 = true ;
        }
        if (s > 84) {
            2 = true ;
        }
    }

    return p ;
}

//string times
function string_times(a, b){
    var t = a ;
    if (b < 0) {
        for (var i = 0; i < b; i++) {
            t = t + a ;
        }

        return t ;

    }
}
//front times
function front_times(f, t) {
    var tx = f;

    var nTx = t.substring(0 , 3) ;

    if(t > 0) {
        for(var i = 1; i < t; i++) {
            nTx = nTx + tx.substring(0 , 3) ;
        }

        return nTx ;

    } else {

        return "" ;

    }
}

//fizzbuzz
function fizz_buzz(a) {
    if (a % 3 === 0) {
        var z3 = false ;
    } else {
        z3 = true ;
    }
    if (a % 5 === 0) {
        var w5 = false ;
    } else {
        w5 = true ;
    }
    if (z3 && w5) {

        return "fizzbuzz " ;

    } else {
        if (z3) {

            return "fizz " ;

        } else {
            if (w5) {

                return "buzz " ;

            } else {

                return x + "! " ;

            }
        }
    }

    return a ;
}

//tea party
function teaParty(x, y) {
    if ( (x < 5) || (y < 5) ) {

        return 0;

    } else {
        if ( (2 * x <= y) || (2 * y <= x) ) {

            return 2 ;

        } else {

            return 1 ;

        }
    }
}

//lone sum
function loneSum(x, y, z) {
    if (x === y && x === z && y === z) {
        sum = 0 ;
    } else{
            if (x === y) {
                var sum = z ;
            }
    } else {
            if (x === z) {
                sum = y;
            }

    } else {
            if (y === z) {
                sum = x;
            }

    } else {
        if (x !== y && x !== z) {
            sum = x + y + z;
        }
    }


    return sum ;
}




//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}
