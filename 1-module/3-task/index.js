'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arr = str.split(/[\s,]/); 
    arr = arr.filter(item => isNaN(item) === false && item !== "")
            .sort(function(a, b) { 
              return a - b;
            });
    let min = +arr[0];
    let max = +arr[arr.length-1];
    return {min: min, max: max}
  }  