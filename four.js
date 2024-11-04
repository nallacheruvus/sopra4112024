//#region 
/**
 * Function to illustrate the usage of conditionals
 * @author satishn
 */
function aa() {
    let a = false;
    if (a) {
        console.log("Its true");
    } else {
        console.log("Its false");
    }
    let b = 10;
    if (b > 5 && b < 6) {
        console.log("Yes in range");
    } else if (b > 6 && b < 10) {
        console.log("No in some other range permitted");
    } else {
        console.log("Not in the allowed range");
    }
    function dd() {
        console.log("object");
    }
    let c = "ALPHA";
    switch (c) {
        case "GAMMA":
            console.log("GAMMA");
            break;
        case "ALPHA":
            console.log("Alpha");
            break;
        default:
            console.log("None");
            break;
    }
    let d = false;
    if (d) { } else { }
    d ? console.log("True") : console.log("False");//ternary operator
}
//#endregion