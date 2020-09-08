function sortValues() {
    let map = new Map();
    map.set("ORANGE", 1);
    map.set("APPLE", 4);
    map.set("KALE", 2);
    let sortedMap = new Map([...map.entries()].sort((a,b) => b[1]-a[1]));
    console.log(sortedMap);
}

function sortKeys() {
    let map = new Map();
    map.set(1, "v");
    map.set(4, "v");
    map.set(2, "v");
    let sortedMap = new Map([...map.entries()].sort((a,b)=> b[0]-a[0]));
    console.log(sortedMap)
}


sortValues();
sortKeys();


function desc() {
    let arr = [1,2,3,4]
    return arr.sort((a,b) => {
        return b-a;
    })
}

console.log(desc());



function test(arr) {
    console.log(`hi`)
    let res = []
    for(let i =arr.length; i>= 0; i--) {
        console.log(arr[i])
    }
    return res;
}

test([1,2,3,4,5,6,10,7,8,9])