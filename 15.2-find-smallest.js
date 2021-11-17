function findSmallest(a, b, c) {
    if (a < b && a < c) { // I need to change the sign > to <  and add operator && in order to get the min
        return a;
    } else if (c < a && c < b) { // the same as line 2
        return c;
    } else {
        return b;
    }
}
console.log(findSmallest(52, 66, 2)); //findSmalest is not defined using debugger, now it's working fine but the result is not what I want