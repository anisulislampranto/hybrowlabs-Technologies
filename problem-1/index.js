let str = "Amolya Sharma";
let join = str.split(" ").join("");
let split = join.toUpperCase();
let obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}

console.log(obj);
