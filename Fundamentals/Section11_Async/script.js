// const request = new XMLHttpRequest();
// request.open("GET", "https://animechan.vercel.app/api/random");
// request.send();
// const elem = document.querySelector(".anime");

// request.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);

//   console.log(data); // data will be a JSON object of all of the info about portugal with name, flag image, etc.

//   // Creating an HTML element from the response data

//   const html = `
//     <div>
//     ${data.quote}
//     </div>
//         `;
//   elem.innerHTML = html;
// });

// const whereAmI = function (lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then((res) => {
//       console.log(res);

//       if (!res.ok) throw new Error("Too many reqs");
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       insertHtml(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// // https://geocode.xyz/52.508,13.381?geoit=json

// whereAmI(52.508, 13.381);

// const x = document.querySelector(".oop");

// const insertHtml = (data) => {
//   x.innerHTML = data.region;
// };

// https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg

//Coding challenge 2 - importanT
const imgContainer = document.querySelector(".imgClass");

const createImage = (imgPath) => {
  return new Promise(function (resolve, reject) {
    imgContainer.src = imgPath;

    imgContainer.addEventListener("load", () => {
      resolve(imgContainer); //this will mark the promise as successful}
    });

    imgContainer.addEventListener("error", () => {
      reject(new Error("Image Not Found"));
    });
    //resolve('Hello');
    //reject("Bye");
  });
};

createImage(
  "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
).then((msg) => console.log(msg));
