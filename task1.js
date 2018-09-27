//1. Описать класс «домашняя библиотека». Предусмотреть возможность работы с произвольным числом книг, поиска книги по какому-либо признаку (например, по автору или по году издания), добавления книг в библиотеку, удаления книг из нее
/*
function HomeLib() {
  this.allBooks = [];
}

HomeLib.toJSON = function (str) {
  str = str.split(/[\s]?\,[\s]?/);
  return { name: str[0], author: str[1], year: str[2] };
};

HomeLib.isJSON = function (str) {
  try {
    return JSON.parse(str)
  } catch (e) {
    return false;
  }
};

HomeLib.prototype = {
  get book() {
    return this.allBooks;
  },
  set book(data) {
    const chooseMethod = typeof data;
    
    if (chooseMethod === 'string') {
      const checkForJSON = HomeLib.isJSON(data);
      
      if (checkForJSON) {
        this.allBooks = this.allBooks.concat(checkForJSON);
      } else if (data.trim().length && data.match(/\,/g).length === 2) {
        this.allBooks = this.allBooks.concat(HomeLib.toJSON(data));
      }
    } else if (chooseMethod === 'object'
      && Object.keys(data).length === 3
      && data.name.trim().length
      && data.author.trim().length && isNaN(data.author)
      && data.year.trim().length && !isNaN(parseFloat(data.year)) && isFinite(data.year)) {
      
      this.allBooks = this.allBooks.concat(data);
    }
  }
};

HomeLib.prototype.find = function (str) {
  const findValue = (obj) => (obj.name + obj.author + obj.year).includes(str);
  
  return this.allBooks.filter(findValue)
};

HomeLib.prototype.remove = function (index) {
  const removed = this.allBooks[index];
  
  this.allBooks.splice(index, 1);
  
  return 'Delete ' + JSON.stringify(removed);
};
*/
// /*
class HomeLib {
  constructor() {
    this.allBooks = [];
  }
  
  static toJSON(str) {
    str = str.split(/[\s]?\,[\s]?/);
    return {name: str[0], author: str[1], year: str[2]};
  };
  
  static isJSON(str) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return false;
    }
  }
  
  get book() {
    return this.allBooks;
  }
  
  set book(data) {
    const chooseMethod = typeof data;
    
    if (chooseMethod === 'string') {
      const checkForJSON = HomeLib.isJSON(data);
      
      if (checkForJSON) {
        this.allBooks = this.allBooks.concat(checkForJSON);
      } else if (data.trim().length && data.match(/\,/g).length === 2) {
        this.allBooks = this.allBooks.concat(HomeLib.toJSON(data));
      }
    } else if (chooseMethod === 'object'
      && Object.keys(data).length === 3
      && data.name.trim().length
      && data.author.trim().length && isNaN(data.author)
      && data.year.trim().length && !isNaN(parseFloat(data.year)) && isFinite(data.year)) {
      
      this.allBooks = this.allBooks.concat(data);
    }
  }
  
  find(str) {
    const findValue = (obj) => (obj.name + obj.author + obj.year).includes(str);
    
    return this.allBooks.filter(findValue)
  }
  
  remove(index) {
    const removed = this.allBooks[index];
    
    this.allBooks.splice(index, 1);
    
    return 'Delete ' + JSON.stringify(removed);
  }
}
// */

const libs = new HomeLib();

libs.book = "War and Peace, L.N.Tolstoi, 1812";
libs.book = "some, L.N.Tolstoi, 1812";
libs.book = "445566, L.N.Tolstoi, 1812";
libs.book = { name: 'Черный обелиск', author: 'Ремарк', year: '1964' };

const testJson = [
  { name: 'Черный обелиск1', author: 'Ремарк', year: '1909' },
  { name: 'Черный обелиск 2', author: 'Ремарк', year: '1909' },
];
libs.book = JSON.stringify(testJson);

console.log(libs.find('so')); //{ name: 'some', author: 'L.N.Tolstoi', year: '1812' }
console.log(libs.remove(1)); //Delete {"name":"some","author":"L.N.Tolstoi","year":"1812"}
console.log(libs.book);
/*
[ { name: 'War and Peace', author: 'L.N.Tolstoi', year: '1812' },
  { name: '445566', author: 'L.N.Tolstoi', year: '1812' },
  { name: 'Черный обелиск', author: 'Ремарк', year: '1964' },
  { name: 'Черный обелиск1', author: 'Ремарк', year: '1909' },
  { name: 'Черный обелиск 2', author: 'Ремарк', year: '1909' } ]
 */


function HomeLib () {
  let allBooks = [];
  
  const toJSON = function(str) {
    str = str.split(/[\s]?\,[\s]?/);
    return {name: str[0], author: str[1], year: str[2]};
  };
  
  const isJSON = function(str) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return false;
    }
  };
  
  const getBook = function() {
    return allBooks;
  };
  
  const setBook = function(data) {
    const chooseMethod = typeof data;
    
    if (chooseMethod === 'string') {
      const checkForJSON = isJSON(data);
      
      if (checkForJSON) {
        allBooks = allBooks.concat(checkForJSON);
      } else if (data.trim().length && data.match(/\,/g).length === 2) {
        allBooks = allBooks.concat(toJSON(data));
      }
    } else if (chooseMethod === 'object'
      && Object.keys(data).length === 3
      && data.name.trim().length
      && data.author.trim().length && isNaN(data.author)
      && data.year.trim().length && !isNaN(parseFloat(data.year)) && isFinite(data.year)) {
      
      allBooks = allBooks.concat(data);
    }
  };
  
  const find = function(str) {
    const findValue = (obj) => (obj.name + obj.author + obj.year).includes(str);
    
    return allBooks.filter(findValue)
  };
  
  const remove = function(index) {
    const removed = allBooks[index];
    
    allBooks.splice(index, 1);
    
    return 'Delete ' + JSON.stringify(removed);
  };
  
  return Object.freeze({
    get book() { return getBook() },
    set book(data) { return setBook(data) },
    find: find,
    remove: remove
  });
}


const libs = HomeLib();

libs.book = "War and Peace, L.N.Tolstoi, 1812";
libs.book = "some, L.N.Tolstoi, 1812";
libs.book = "445566, L.N.Tolstoi, 1812";

libs.book = { name: 'Черный обелиск', author: 'Ремарк', year: '1964' };

const testJson = [
  { name: 'Черный обелиск1', author: 'Ремарк', year: '1909' },
  { name: 'Черный обелиск 2', author: 'Ремарк', year: '1909' },
];
libs.book = JSON.stringify(testJson);

console.log(libs.find('so')); //{ name: 'some', author: 'L.N.Tolstoi', year: '1812' }
console.log(libs.remove(1)); //Delete {"name":"some","author":"L.N.Tolstoi","year":"1812"}
console.log(libs.some = 'sdf')
console.log(libs.some)
console.log(libs.book);






