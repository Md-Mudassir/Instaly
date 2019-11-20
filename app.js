// getElementByXpath = path => {
//     return document.evaluate(
//       path,
//       document,
//       null,
//       XPathResult.FIRST_ORDERED_NODE_TYPE,
//       null
//     ).singleNodeValue;
//   };
function myFunction() {
    let div = document.getElementById("div")    
    let calculate = document.getElementById("calculate")
    let nodelist = div.getElementsByTagName("div").length;
    let result = document.getElementById("result");
    result.innerHTML = nodelist
    
    // console.log(nodelist)
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('submit');
    // onClick's logic below:
    link.addEventListener('click', () => {
        myFunction();
    });
});



