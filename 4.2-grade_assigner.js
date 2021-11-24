const gradeAssinger = (grade) => {
    if (grade >= 0 && grade <= 64) {
        console.log('F')
    }
    else if (grade >= 65 && grade <= 69) {
        console.log('D')
    }
    else if (grade >= 70 && grade <= 79) {
        console.log('C')
    }
    else if (grade >= 80 && grade <= 89) {
        console.log('B')
    }
    else if (grade >= 90 && grade <= 100) {
        console.log('A')
    }
    else {
        console.log('Error')
    }
}
gradeAssinger(99);