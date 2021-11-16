const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson(type, id) {
        let teachers = this.teachers;
        let students = this.students;
        let person = {};
        if (type === 'teachers') {
            person = teachers.filter(el => el.id === id);
            return person;
        }
        else if (type === 'students') {
            person = students.filter(el => el.id === id);
            return person;
        }
    }, assignStudent(subject, id) {
        const std = this.students.filter(el => el.id === id);
        const tch = this.teachers.filter(el => el.subjects.indexOf(subject) >= 0);
        tch[0].capacityLeft -= 1;
        if (tch[0].capacityLeft > 0) {
            this.teachers.forEach(e => e.students.push(std[0].name));
        } else {
            tch[0].capacityLeft == 1;
            return "Sorry,no available places left";
        }
        return tch;
    }, assignTeachersSubject(subject, id) {
        let tch = this.teachers.filter(el => el.id === id);
        let exist = tch[0].subjects.filter(el => el == subject);
        if (exist.length > 0) {
            return subject + " already exist";
        } else {
            tch[0].subjects.push(subject);
            return "Added  " + tch[0].subjects;
        }
    },
    availableClasses(id) {
        let tch = this.teachers.filter(el => el.id === id);
        let subjects = tch[0].subjects;
        if (subjects.length > 0) {
            return 'available classes: ' + subjects;
        } else {
            return 'no available classes';
        }
    }
};


console.log(school.findPerson('teachers', 1));
console.log(school.findPerson('students', 13));
console.log(school.assignStudent('history', 13));
console.log(school.assignStudent('history', 13));
console.log(school.assignTeachersSubject('art', 2));
console.log(school.availableClasses(2));




