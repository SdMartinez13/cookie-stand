'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let parentElement = document.getElementById('store-profiles');


let seattleStore = {
  location: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgSale: 6.3,
  cookiesArray: [],

  guestsPerHour: function(){
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
  },

  cookiesPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
    }
    console.log(this.cookiesArray);
  },

  render: function(){
    this.cookiesPerHour();
    let article = document.createElement('article');
    parentElement.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = seattleStore.location;
    article.appendChild(h2);

    let ul = document.createElement('ul');
    article.appendChild(ul);

    for (let i = 0; i < storeHours.length; i++){
      let li = document.createElement('li');
      li.textContent = storeHours[i] + ': ' + seattleStore.cookiesArray[i] + 'cookies';
      ul.appendChild(li);
    }

  }
};

seattleStore.render();
console.log(seattleStore.cookiesArray);

let tokyoStore = {
  location: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgSale: 1.2,
  cookiesArray: [],

  guestsPerHour: function(){
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
  },

  cookiesPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
    }
    console.log(this.cookiesArray);
  },

  render: function(){
    this.cookiesPerHour();
    let article = document.createElement('article');
    parentElement.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = tokyoStore.location;
    article.appendChild(h2);

    let ul = document.createElement('ul');
    article.appendChild(ul);

    for (let i = 0; i < storeHours.length; i++){
      let li = document.createElement('li');
      li.textContent = storeHours[i] + ': ' + tokyoStore.cookiesArray[i] + 'cookies';
      ul.appendChild(li);
    }

  }
};

tokyoStore.render();
console.log(tokyoStore.cookiesArray);

let dubaiStore = {
  location: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgSale: 3.7,
  cookiesArray: [],

  guestsPerHour: function(){
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
  },

  cookiesPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
    }
    console.log(this.cookiesArray);
  },

  render: function(){
    this.cookiesPerHour();
    let article = document.createElement('article');
    parentElement.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = dubaiStore.location;
    article.appendChild(h2);

    let ul = document.createElement('ul');
    article.appendChild(ul);

    for (let i = 0; i < storeHours.length; i++){
      let li = document.createElement('li');
      li.textContent = storeHours[i] + ': ' + dubaiStore.cookiesArray[i] + 'cookies';
      ul.appendChild(li);
    }

  }
};

dubaiStore.render();
console.log(dubaiStore.cookiesArray);

let parisStore = {
  location: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgSale: 2.3,
  cookiesArray: [],

  guestsPerHour: function(){
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
  },

  cookiesPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
    }
    console.log(this.cookiesArray);
  },

  render: function(){
    this.cookiesPerHour();
    let article = document.createElement('article');
    parentElement.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = parisStore.location;
    article.appendChild(h2);

    let ul = document.createElement('ul');
    article.appendChild(ul);

    for (let i = 0; i < storeHours.length; i++){
      let li = document.createElement('li');
      li.textContent = storeHours[i] + ': ' + parisStore.cookiesArray[i] + 'cookies';
      ul.appendChild(li);
    }

  }
};

parisStore.render();
console.log(parisStore.cookiesArray);


let limaStore = {
  location: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgSale: 4.6,
  cookiesArray: [],

  guestsPerHour: function(){
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
  },

  cookiesPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.cookiesArray.push(Math.ceil(this.avgSale * this.guestsPerHour()));
    }
    console.log(this.cookiesArray);
  },

  render: function(){
    this.cookiesPerHour();
    let article = document.createElement('article');
    parentElement.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = limaStore.location;
    article.appendChild(h2);

    let ul = document.createElement('ul');
    article.appendChild(ul);

    for (let i = 0; i < storeHours.length; i++){
      let li = document.createElement('li');
      li.textContent = storeHours[i] + ': ' + limaStore.cookiesArray[i] + 'cookies';
      ul.appendChild(li);
    }

  }
};

limaStore.render();
console.log(limaStore.cookiesArray);










