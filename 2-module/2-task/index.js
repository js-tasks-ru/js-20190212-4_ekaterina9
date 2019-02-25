function a(obj, path = '') {
    const result = {};
    for(let key in obj) {
      if (typeof(obj[key])==='object') {
        let newpath
        if (path === '') {
          newpath = a(obj[key], path + key);  
        } else {
          newpath = a(obj[key], path + '.' + key); 
        }
        Object.assign(result, newpath);
      } else {
        result[path + '.' + key]= obj[key];
      }
    }
    return result;
}

/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {
    const result = a(obj);
    const arr = [];
    for(let key in result) {
      let i = arr.length;
      if (result[key]===value) {
        arr[i] = key;
      }
    }
    if (arr.length === 0) {
      return null;
    } if (arr.length === 1){
      return arr[0];
    }
    return arr;
  }