function orderWeight(strng) {
    let sumarray = (num) =>{
        return num.split('').reduce((a,b) => {return parseInt(a) + parseInt(b)});
    };

    return strng.split(' ').sort(function(a,b) {
        return sumarray(a) - sumarray(b) || a > b || -(a < b)
    }).join(' ');
}