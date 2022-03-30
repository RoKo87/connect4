//Changes the text of an element
function setText(element, text) {
    document.getElementById(element).textContent = text;
}

//Checks if a element is a certain string
function isText(element, text) {
    if (document.getElementById(element).textContent == text) {
        return true; 
    } else {
        return false;
    }
}

//Changes the number of an element by a certain number
function changeValueBy(element, number) {
    if (document.getElementById(element).textContent != NaN) {
        var res = 0;
        res = document.getElementById(element).textContent;
        console.log(res);
        res = res + number;
        console.log(res + ", " + number);
        document.getElementById(element).textContent = res;
    } else {
        return NaN;
    }
}

//Changes the number of an element by a certain number
function getNum(element) {
    if (document.getElementById(element).textContent != NaN) {
        var number =  document.getElementById(element).textContent;
        return number;
     }
}

function getText(element) {
        var text = document.getElementById(element).value;
        return text;
     
}