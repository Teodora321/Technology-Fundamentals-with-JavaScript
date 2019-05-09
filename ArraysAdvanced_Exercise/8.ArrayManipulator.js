function solve(arr) {
    let inventory = arr
        .shift()
        .split(' ');

    for (let row of arr) {
        let tokens = row.split(' ');
        let command = tokens[0];
        if (command === 'Buy') {
            buyItem(tokens[1]);
        } else if (command === 'Trash') {
            deleteItem(tokens[1]);
        } else if (command === 'Repair') {
            repairItem(tokens[1]);
        } else if (command === 'Upgrade') {
            let [item, upgrade] = tokens[1].split('-');
            upgradeItem(item, upgrade);
        }

    }

    function buyItem(item) {
        let index = inventory.indexOf(item);
        if (index === -1) {
            inventory.push(item);
        }
    }

    function deleteItem(item) {
        let index = inventory.indexOf(item);
        if (index !== -1) {
            inventory.splice(index, 1);
        }
    }

    function repairItem(item) {
        let index = inventory.indexOf(item);
        if (index !== -1) {
            inventory.splice(index, 1);
            inventory.push(item);
        }
    }

    function upgradeItem(item,upgrade) {
        let index = inventory.indexOf(item);
        if (index !== -1){
            let upgradedItem =`${item}:${upgrade}`;
            inventory.splice(index+1,0,upgradedItem );
        }
            }

    console.log(inventory.join(' '))
}

solve()