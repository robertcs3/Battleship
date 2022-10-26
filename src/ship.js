/* Create ship objects */
const Ship = (length) => {

    const hit = () => {
        let count = 0;
        count++;
        return count;
    }

    const isSunk = () => {
        if(hit == length) return true;
    }

    return {hit, isSunk};
}



module.exports = Ship;