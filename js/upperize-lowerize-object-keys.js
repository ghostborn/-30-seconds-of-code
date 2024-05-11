const upperize = obj =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k.toUpperCase()] = obj[k];
    return acc;
  }, {});

upperize({ Name: 'John', Age: 22 }); // { NAME: 'John', AGE: 22 }

const a = {x:1}
const b = structuredClone(a)    //原生深度克隆
