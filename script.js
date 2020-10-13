var wrapperEle = document.body.querySelector(".wrapper");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];


// This part of the code displays list items and colors them red if their age is above 40.
for (var i = 0; i < list.length; i++) {
  {
    ageEle = document.createElement("div");
    ageEle.innerHTML = list[i].age+" Years Old";
    wrapperEle.appendChild(ageEle);
    personEle = document.createElement("div");
    personEle.innerHTML = list[i].name;
    wrapperEle.appendChild(personEle);
    if (list[i].age >= 40) {
    personEle.style.color=("red");
  }
}
}

function increment()
{
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}