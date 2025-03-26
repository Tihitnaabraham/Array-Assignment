let arr1=[3,7,34,90,12];
let lastElement=arr1[arr1.length-1];
console.log(lastElement)


let arr2=["true","green","where",12,56]
let lastArray=arr2[arr2.length-1]
console.log(lastArray);


let mypets=["caw","bird","snake","dog"]
let joined=mypets.join("")
console.log(joined);


let arr3=[-5,9,5,3,2,-3,6,8,4,1]
arr3.sort((a,b)=>a-b);
console.log(arr3);


let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = [...new Set(arr)];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log("Array without duplicates:", uniqueArr);
console.log("Array of duplicates:", duplicates);

let arr5=["the","wat","x","for"]
let word="food"
if(arr5.includes(word)){
    console.log(word);
}
else{
    console.log("The word was not found")

}
let word2="renniw"
let sorted=word2.split("").sort().join("");
console.log(sorted);

let fruits=["apple","orange","banana","avocado","mango","grape","kiwi","watermelon","pinaple","coconut"]
fruits.splice(5,0,"tomato");
console.log(fruits);

