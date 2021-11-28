const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const getUsers = () => {
    let namesArr = [];
    users.forEach((el) => {
        namesArr.push(el);
    })
    return namesArr;
};

const createList = (arr) => {
    let arrList = [];
    const list = document.createElement('ol')
    let mylist = document.body.appendChild(list);
    mylist.style.listStyle = 'none';
    arr.forEach((el) => {

        let li = document.createElement("LI");
        let myLi = mylist.appendChild(li);
        myLi.setAttribute('data-id', el.id)
        let content = document.createTextNode(`${el.firstName} ${el.lastName}`);
        myLi.appendChild(content)
        arrList.push(myLi);
    })
    return arrList;
}
console.log(createList(getUsers()));

