console.log("hello");
document.body.append(document.createElement("textarea"));
const text1 = document.querySelector("textarea");
text1.textContent =
  "underscore_case\nfirst_name\nSome_Variable\n calculate_AGE\ndelayed_departure";
document.body.append(document.createElement("button"));

// const samplearray = text1.textContent.split('\n');
// console.log(samplearray);

// for (const z of samplearray) {
//   const q = z.split('_');
//   console.log(q);
//   const k = q[0] + q[1][0].toUpperCase() + q[1].slice(1);
//   console.log(k);
// }

document.querySelector("button").addEventListener("click", () => {
  const solution1 = text1.textContent.split("\n");
  const newArray = [];
  const finalArray = [];
  for (const x of solution1) {
    const a = x.trim().toLowerCase();
    newArray.push(a);
  }
  for (const z of newArray) {
    const q = z.split("_");
    // console.log(q);
    const k = q[0] + q[1][0].toUpperCase() + q[1].slice(1);
    console.log(k);
    finalArray.push(k);
  }

  return finalArray;
});
