function maxProfit(prices) {
  let minPrice = Infinity;
  const maxProfits = []; // max you could make by selling on this day
  for(let price of prices) {
    minPrice = price < minPrice ? price : minPrice;
    maxProfits.push(price - minPrice);
  }
  return Math.max(...maxProfits);
}