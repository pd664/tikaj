function groupByOwners(obj) {
    let opt = {};
    Object.entries(obj).forEach(([key, val]) => {
        if(!opt[val]) {
            opt[val] = []
        }
        if (opt[val]){
            opt[val].push(key)
        }
    })

    return opt
}

let obj =  {
    'Input.txt': 'Randy',
    'Code.py': 'Stan',
    'Output.txt': 'Randy'
}

console.log(groupByOwners(obj))