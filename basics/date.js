// let a = date.getFullYear();

// let b = date.getHours()
// console.log(a);
// let c = date.toDateString()

// console.log(c);

setInterval(() => {
  const date = new Date();
  const houre = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  console.log(`${houre}:${minute}:${second}`);
}, 1000);
