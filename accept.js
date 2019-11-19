getElementByXpath = path => {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
};
let i;

setTimeout(() => {
  getElementByXpath(
    "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/a"
  ).click();
  setTimeout(() => {
    getElementByXpath(
      "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/div/div/div/div/div"
    ).click();

    setTimeout(() => {
      try {
        for (i = 1; i < 100; i++) {
          // let count = count + i - 1;
          getElementByXpath(
            "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/div/div/div/div[" +
              i +
              "]/div[3]/div/div/button"
            // arr.push(i)
          ).click();
        }
      } catch (err) {
        console.log(`Accepted requests = ${i - 1}`);
      }
    }, 3000);
  }, 3000);
}, 3000);
