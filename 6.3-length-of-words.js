const stringLength = (arr) => {
// let arr = ["gsg", "test", "hello"]
let arr2 = []
for (var i = 0; i < arr.length; i++) {
 let string = arr[i].length;
 arr2.push(string)

}
console.log(arr2);
}

stringLength(['hey', 'you', 'test']);