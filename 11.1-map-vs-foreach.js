const videoLibrary = (obj) => { // using forEach to iterate object values
    obj.forEach((el) => {
        let id = el.id;
        let title = el.title;
        obj = {
            id, title
        }
        const arr =[obj];
        console.log(arr)
    })
}

const videoLibrary2 = (obj) => {
    obj.map((el) => {
        let id = el.id;
        let title = el.title;
        console.log('Movie name is: ' + title + ' and its id is: ' + id)
    })
}

const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
];

videoLibrary(newReleases);
console.log('*'.repeat(50));
videoLibrary2(newReleases);