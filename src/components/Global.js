import EventEmitter from 'events';

/*
    Stores variables which are accessed from all files
*/

// 0 -> English
// 1 -> French
export const languageContainer = {
    item: 0
};

export const languageEventEmitter = new EventEmitter();

export const setLanguage = (newLanguage) => {
  languageContainer.item = newLanguage;
  languageEventEmitter.emit('languageChange', languageContainer.item);
};


// 0 -> Home Page
// 1 -> Log In Page
// 2 -> About Us Page
// 3 -> Credit Cards Page
// 4 -> Accounts Page
export const pageContainer = {
    item: 0
};

export const pageEventEmitter = new EventEmitter();

export const setPage = (newPage) => {
    pageContainer.item = newPage;
    pageEventEmitter.emit('pageChange', pageContainer.item);
};