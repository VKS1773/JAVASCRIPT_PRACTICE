let jsonObj = {
  name: "Arfain",
  company: "XYZ",
  location: "INDIA",
  relocate: true,
};

console.log(jsonObj);

let jsonStr = JSON.stringify(jsonObj);
console.log(jsonStr);

jsonStr = jsonStr.replace("INDIA", "KSA");
console.log(jsonStr);

newJson = JSON.parse(jsonStr);
console.log(newJson);
