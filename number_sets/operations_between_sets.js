// operations between numerical sets

// Union
// The union between two or more sets will be a new set consisting
// of elements that belong to at least one of the sets in question.
exports.union = (...props) => {

    let set = Array();

    props.forEach(element => {
        element.forEach(internal_element => {
            if (set.indexOf(internal_element) == -1) {
                set.push(internal_element);
            }
        })
    })

    return set.sort((a, b) => a - b);

}

// Intersection
// The intersection between two or more sets will also be a new set 
// formed by elements that belong, at the same time, to all the sets involved.
exports.intersection = (...props) => {
        
    let set = Array();

    props.forEach(array1 => {
        array1.forEach(element1 => {
            let equal = 0;
            props.forEach(array2 => {
                array2.forEach(element2 => {
                    if(array1 != array2 && element1 == element2) {
                        equal += 1;

                        if (equal == props.length-1 && set.indexOf(element1) == -1) {
                            set.push(element1);
                        }
                    }
                })
            })
        })
    })

    return set.sort((a, b) => a - b);

}