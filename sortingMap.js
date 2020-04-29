function sortValues() {
    let map = new Map();
    map.set("ORANGE", 1);
    map.set("APPLE", 4);
    map.set("KALE", 2);
    let sortedMap = [...map.entries()].sort((a,b) => b[1]-a[1]);
    console.log(sortedMap);
}

function sortKeys() {
    let map = new Map();
    map.set(1, "v");
    map.set(4, "v");
    map.set(2, "v");
    let sortedMap = [...map.entries()].sort((a,b)=> b[0]-a[0]);
    console.log(sortedMap)
}


sortValues();
sortKeys();
