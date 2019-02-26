let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;
  return {
    next() {
      if (current <= last) {
        if(current.getDay()===5 || current.getDay()===6){
          current.setDate(current.getDate() + 1);
          return current.getDate()<10?{
            done: false,
            value: `[0${current.getDate(current.setDate(current.getDate()))}]`
          }:{
            done: false,
            value: `[${current.getDate(current.setDate(current.getDate()))}]`
          };
        }
        else {
            current.setDate(current.getDate() + 1);
            return current.getDate()<10?{
                done: false,
                value: `0${current.getDate(current.setDate(current.getDate()))}`
            }:{
                done: false,
                value: `${current.getDate(current.setDate(current.getDate()))}`
            };
        }
      } else {
        return {
          done: true
        };
      }
    }
  }
};


