getElementByXpath = path => {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
};

setTimeout(() => {
  getElementByXpath(
    "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/a"
  ).click();
  setTimeout(() => {
    getElementByXpath(
      "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/div/div/div/div/div"
    ).click();
    setTimeout(() => {
      for (let i = 1; i < 100; i++) {
        getElementByXpath(
          "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/div/div/div/div[" +
            i +
            "]/div[3]/div/div/button"
        ).click();
      }
    }, 2000);
  }, 3000);
}, 3000);


