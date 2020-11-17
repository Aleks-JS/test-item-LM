const db = {
  displayedName: {
    displayedName: {
      value: ['Профиль маячковый ПВХ 10 мм L3м'],
      description: 'Полное наименование товара для клиента',
    },
  },
  stock: {
    stocks: {
      34: {
        2: '35',
        3: '42',
        4: '58',
        5: '57',
        6: '112',
        20: '51',
        22: '78',
        26: '34',
        32: '22',
        35: '358',
        40: '28',
        43: '68',
        45: '58',
        49: '31',
        51: '29',
        56: '42',
        62: '26',
        64: '0',
        65: '57',
        86: '15',
        114: '41',
        117: '46',
        143: '46',
        162: '4',
        171: '0',
        176: '12',
      },
    },
  },
};

// method for getting a list of stores with leftovers in a certain region
const getStocksOfStoresList = (obj, region) => {
  return Object.entries(obj.stock.stocks[region]);
};

// stocks of store list
const stocksOFStore = getStocksOfStoresList(db, 34);

// get stocks list
const getStocksList = (obj, region) => {
  return Object.values(obj.stock.stocks[region]);
};

/*========================== solution of the task ==============================*/

// method for getting product name
const getProductName = (obj) => {
  return obj.displayedName.displayedName.value.join('');
};

const productName = getProductName(db);

// method for obtaining a list of stores with positive stock balances
const getStoresWithPositiveStockBalances = () => {
  const arrayListShops = [];

  stocksOFStore.forEach(
    ([key, val]) => parseInt(val) > 0 && arrayListShops.push(key)
  );

  return arrayListShops;
};

// method for getting a store with the maximum amount of stock

const stocksList = getStocksList(db, 34);

const getMaximumAmountOfStock = () => {
  const maximumBalance = stocksList.sort((a, b) => b - a)[0];
  let result;
  stocksOFStore.forEach(
    ([key, val]) =>
      val === maximumBalance &&
      (result = `Максимальный остаток товара ${productName} есть в магазине №${key} в количестве ${maximumBalance} шт`)
  );

  return result;
};

console.log(productName);
console.log(getStoresWithPositiveStockBalances());
console.log(getMaximumAmountOfStock());
