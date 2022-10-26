/* Create ship objects */
const Ship = (length) => {
    let hitCount = 0;

    const hit = () => {
        if (hitCount <= length) {
            hitCount++;
        }
        return hitCount;
    }

    const isSunk = () => {
        if(hitCount == length) return true;
    }

    return {hit, isSunk};
}



module.exports = Ship;