'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const tableElem = document.getElementById('table');
const stores = [];

const newStoreForm = document.getElementById('new-form');

const tableFooter = document.createElement('tfoot');


function Stores(location, minCus, maxCus, avgSale) {

  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgSale = avgSale;
  this.total = 0;
  this.cookiesArray = [];
  stores.push(this);
}

Stores.prototype.guestsPerHour = function(){
  return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
};

Stores.prototype.cookiesPerHour = function(){
  for (let i = 0; i < storeHours.length; i++){
    let cookieNum = Math.ceil(this.avgSale * this.guestsPerHour());
    this.cookiesArray.push(cookieNum);
    this.total += cookieNum;
  }
  console.log(this.cookiesArray);
};

Stores.prototype.render = function() {
  this.cookiesPerHour();

  const tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);

  const th = document.createElement('th');
  th.textContent = this.location;
  tableRow.appendChild(th);

  for (let i = 0; i < storeHours.length; i++){
    let td = document.createElement('td');
    td.textContent = this.cookiesArray[i];
    tableRow.appendChild(td);
  }

  const totalCell = document.createElement('td');
  totalCell.textContent = this.total;
  tableRow.appendChild(totalCell);
};

function createHeader(){

  const headerRow = document.createElement('tr');
  tableElem.appendChild(headerRow);

  const firstCell = document.createElement('th');
  headerRow.appendChild(firstCell);
  firstCell.textContent = 'StoreHours';

  for (let i = 0; i < storeHours.length; i++){
    let timesHeaderCell = document.createElement('th');
    timesHeaderCell.textContent = storeHours[i];
    headerRow.appendChild(timesHeaderCell);
  }

  const lastCell = document.createElement('th');
  headerRow.appendChild(lastCell);
  lastCell.textContent = 'Location Totals';

}

function createFooter(){

  const footerRow = document.createElement('tr');
  tableElem.appendChild(tableFooter);
  tableFooter.appendChild(footerRow);

  const firstCell = document.createElement('th');
  footerRow.appendChild(firstCell);
  firstCell.textContent = 'GrandTotal';

  let totalSum = 0;

  for (let i = 0; i < storeHours.length; i++){
    let hourlySum = 0;
    for (let j = 0; j < stores.length; j++){
      hourlySum += stores[j].cookiesArray[i];


    }
    totalSum += hourlySum;

    let totalFooterCell = document.createElement('td');
    totalFooterCell.textContent = hourlySum;
    footerRow.appendChild(totalFooterCell);
  }
  let grandTotal = document.createElement('td');
  grandTotal.textContent = totalSum;
  footerRow.appendChild(grandTotal);
}

function handleSubmit(event){
  event.preventDefault();

  let location = event.target.location.value;
  let minCus = event.target.minCus.value;
  let maxCus = event.target.maxCus.value;
  let avgSale = event.target.avgSale.value;

  let newLocation = new Stores(location, minCus, maxCus, avgSale);
  newLocation.render();
  tableFooter.innerHTML = '';
  createFooter();
}
function renderAllStores(){
  for (let i = 0; i < stores.length; i++){
    stores[i].render();
  }
}


new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 2.3);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);
console.log(stores);

createHeader();
renderAllStores();
createFooter();

newStoreForm.addEventListener('submit', handleSubmit);

// let seattleStore = {
//   location: 'Seattle',
//   minCus: 23,
//   maxCus: 65,
//   avgSale: 6.3,
//   cookiesArray: [],

//   guestsPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//   },

//   cookiesPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
//     }
//     console.log(this.cookiesArray);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let article = document.createElement('article');
//     parentElement.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = seattleStore.location;
//     article.appendChild(h2);

//     let ul = document.createElement('ul');
//     article.appendChild(ul);

//     for (let i = 0; i < storeHours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = storeHours[i] + ': ' + seattleStore.cookiesArray[i] + 'cookies';
//       ul.appendChild(li);
//     }

//   }
// };

// seattleStore.render();
// console.log(seattleStore.cookiesArray);

// let tokyoStore = {
//   location: 'Tokyo',
//   minCus: 3,
//   maxCus: 24,
//   avgSale: 1.2,
//   cookiesArray: [],

//   guestsPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//   },

//   cookiesPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
//     }
//     console.log(this.cookiesArray);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let article = document.createElement('article');
//     parentElement.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = tokyoStore.location;
//     article.appendChild(h2);

//     let ul = document.createElement('ul');
//     article.appendChild(ul);

//     for (let i = 0; i < storeHours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = storeHours[i] + ': ' + tokyoStore.cookiesArray[i] + 'cookies';
//       ul.appendChild(li);
//     }

//   }
// };

// tokyoStore.render();
// console.log(tokyoStore.cookiesArray);

// let dubaiStore = {
//   location: 'Dubai',
//   minCus: 11,
//   maxCus: 38,
//   avgSale: 3.7,
//   cookiesArray: [],

//   guestsPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//   },

//   cookiesPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
//     }
//     console.log(this.cookiesArray);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let article = document.createElement('article');
//     parentElement.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = dubaiStore.location;
//     article.appendChild(h2);

//     let ul = document.createElement('ul');
//     article.appendChild(ul);

//     for (let i = 0; i < storeHours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = storeHours[i] + ': ' + dubaiStore.cookiesArray[i] + 'cookies';
//       ul.appendChild(li);
//     }

//   }
// };

// dubaiStore.render();
// console.log(dubaiStore.cookiesArray);

// let parisStore = {
//   location: 'Paris',
//   minCus: 20,
//   maxCus: 38,
//   avgSale: 2.3,
//   cookiesArray: [],

//   guestsPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//   },

//   cookiesPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
//     }
//     console.log(this.cookiesArray);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let article = document.createElement('article');
//     parentElement.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = parisStore.location;
//     article.appendChild(h2);

//     let ul = document.createElement('ul');
//     article.appendChild(ul);

//     for (let i = 0; i < storeHours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = storeHours[i] + ': ' + parisStore.cookiesArray[i] + 'cookies';
//       ul.appendChild(li);
//     }

//   }
// };

// parisStore.render();
// console.log(parisStore.cookiesArray);


// let limaStore = {
//   location: 'Lima',
//   minCus: 2,
//   maxCus: 16,
//   avgSale: 4.6,
//   cookiesArray: [],

//   guestsPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//   },

//   cookiesPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
//     }
//     console.log(this.cookiesArray);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let article = document.createElement('article');
//     parentElement.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = limaStore.location;
//     article.appendChild(h2);

//     let ul = document.createElement('ul');
//     article.appendChild(ul);

//     for (let i = 0; i < storeHours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = storeHours[i] + ': ' + limaStore.cookiesArray[i] + 'cookies';
//       ul.appendChild(li);
//     }

//   }
// };

// limaStore.render();
// console.log(limaStore.cookiesArray);