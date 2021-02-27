
exports.min = function min (array) {
    if (array && array.length){
        let ret = array[0];
        for (let i = 0; i < array.length; i++) {
            if (ret > array[i]) {
                ret = array[i];
            }
        }
        return ret;
    }
  return 0;
}

exports.max = function max (array) {
    if (array && array.length){
        let ret = array[0];
        for (let i = 0; i < array.length; i++) {
            if (ret < array[i]) {
                ret = array[i];
            }
        }
        return ret;
    }
  return 0;
}

exports.avg = function avg (array) {
    if (array && array.length){
        let result = array.reduce((sum, item) => sum + item, 0);
        return result / array.length;
    }
  return 0;
}
