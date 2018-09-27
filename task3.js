//1.Строка состоит из слов, разделенных одним или несколькими пробелами. Поменяйте местами наибольшее по длине слово и наименьшее.

// const biggerWord1 = (function () {
//   let _wordsArr = [];
//   const _hideAction = {};
//
//   _hideAction.splitString = (str) => {
//     _wordsArr = str.split(' ');
//
//     return null;
//   };
//
//   _hideAction.sortWords = () => _wordsArr.slice(0).sort((a, b) => {
//     const first = a.length;
//     const next = b.length;
//
//     return (first > next) - (first < next)
//   });
//
//   _hideAction.findIndex = (word) => _wordsArr.indexOf(word);
//
//   _hideAction.replaceWords = () => {
//     const allWordsSort = _hideAction.sortWords();
//
//     const smallWord = allWordsSort[0];
//     const biggerWord = allWordsSort[allWordsSort.length - 1];
//
//     const smallIndex = _hideAction.findIndex(smallWord);
//     const biggerIndex = _hideAction.findIndex(biggerWord);
//
//     _wordsArr[smallIndex] = biggerWord;
//     _wordsArr[biggerIndex] = smallWord;
//
//     return _wordsArr.join(' ')
//   };
//
//   return {
//     set: _hideAction.splitString,
//     get: _hideAction.replaceWords
//   }
// })();


const biggerWord = (function () {
  let _wordsArr = [];
  const _hideAction = {};
  
  _hideAction.splitString = (str) => {
    _wordsArr = str.split(' ');
    
    return null;
  };
  
  _hideAction.checkWords = () => {
    const words = { biggerWord: '', smallWord: '' };
    
    _wordsArr.forEach((word) => {
      const wordLen = word.length;
      
      if (words.biggerWord.length < wordLen) words.biggerWord = word;
      if (!words.smallWord.length || words.smallWord.length > wordLen) words.smallWord = word;
    });
    
    return words;
  };
  
  _hideAction.findIndex = (word) => _wordsArr.indexOf(word);
  
  _hideAction.replaceWords = () => {
    const { biggerWord, smallWord} = _hideAction.checkWords();
    
    const smallIndex = _hideAction.findIndex(smallWord);
    const biggerIndex = _hideAction.findIndex(biggerWord);
    
    _wordsArr[smallIndex] = biggerWord;
    _wordsArr[biggerIndex] = smallWord;
    
    return _wordsArr.join(' ')
  };
  
  return {
    set: _hideAction.splitString,
    get: _hideAction.replaceWords
  }
})();

biggerWord.set('Rapidiously aggregate so a premier e-services with professional benefits.');
console.log(biggerWord.get());



//2.Напишите функцию, которая нумерует все абзацы страницы и добавляет номер перед текстом абзацев.
//   'Professionally cultivate stand-alone potentialities after worldwide partnerships. \n' +
//   'Collaboratively e-enable functional experiences rather.\n' +
//   'Dynamically restore B2C technologies via an expanded array of web-readiness.\n' +
//   'Rapidiously deliver.'

const counterParagraph = (function () {
  let _stringArr = [];
  const _hideActions = {};
  
  _hideActions.get = (str) => {
    _stringArr = str.split('\n');
    
    return null;
  };
  
  _hideActions.setNumber = () => _stringArr.map((string, index) => `${ ++index }. ${ string }`).join('\n');
  
  return {
    paragraph: _hideActions.get,
    count: _hideActions.setNumber
  }
})();

counterParagraph.paragraph('Professionally cultivate stand-alone potentialities after worldwide partnerships. \n' +
  'Collaboratively e-enable functional experiences rather.\n' +
  'Dynamically restore B2C technologies via an expanded array of web-readiness.\n' +
  'Rapidiously deliver.');
console.log(counterParagraph.count()); /*
1. Professionally cultivate stand-alone potentialities after worldwide partnerships.
2. Collaboratively e-enable functional experiences rather.
3. Dynamically restore B2C technologies via an expanded array of web-readiness.
4. Rapidiously deliver. */



// 3. Дан текст. Найдите наибольшее количество подряд идущих пробелов в нем.
//   'Rapidiously  evolve    premier     alignments  through     effective   bandwidth.'

const countSpaces = (function () {
  let _countSpaces = 0;
  
  const _spaces = (str) => str.replace(/\s+/g, (space) => {
    const lengthSpaces = space.length;
    
    if (lengthSpaces > _countSpaces) _countSpaces = lengthSpaces;
    
    return null;
  });
  
  return {
    set: _spaces,
    bigger: () => _countSpaces
  }
})();

countSpaces.set('Rapidiously  evolve    premier     alignments  through     effective   bandwidth.');
console.log(countSpaces.bigger()); //5
