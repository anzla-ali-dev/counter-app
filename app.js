var span = document.getElementById("num");
var count = +(span.innerText);

function incres(){
    count = count + 1;
    console.log(count);
    span.innerText=count
    
}

function decres(){
    if (count > 0) {
        count = count - 1;
        console.log(count);
        span.innerText=count
    }
}

function restart(){
    count = 0;
    console.log(count);
    span.innerText=count
    
}

var savedValue = 0;
function save() {
    savedValue = count;
    console.log("Saved Value:" , savedValue);
    alert("Count saved successfully! " + savedValue);
}
