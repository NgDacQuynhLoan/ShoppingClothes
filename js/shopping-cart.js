// function main() {
//     var slideIndex = 1;
//     showSlides(slideIndex);
// }

// main();

/* remove */
function removeCartItem(removingItem) {
    let currentItem = removingItem.parentNode.parentNode;
    if (confirm('Do you want to remove this product?')){
        currentItem.remove();
    }else{
        console.log('not remove')
    }
    // updatedTotal ();
}
function sumArray(mang){
        let sum = 0;
        for (let i = 0; i < mang.length; i++){
            sum += mang[i];
        }
         
        return sum;
}


/* Not finish yet */
// function bill(totalItems){
//     let sum = 0
//     // let totalCost = totalItems.parentNode.parentNode.parentNode.parentNode.firstElementChild.
// nextElementSibling.firstElementChild.lastChild.firstElementChild;
    
//     for(i=0 ; i< totalItems.length ; i++){
//         total = totalItems[i]    
//     }
// }
/* total ===========================> Sai */ 
function updateTotal(itemInput){
    let currentItemPrice = itemInput.parentNode.previousElementSibling.firstElementChild;
    let currentItemTotal = itemInput.parentNode.nextElementSibling.firstElementChild;
    let formattedItemQuantity = Number(itemInput.value);
    let formattedItemPrice = Number(currentItemPrice.innerHTML.replace('$',''));

    // Calculate current item total
    currentItemTotal = formattedItemQuantity * formattedItemPrice;

    // Re-format current item total
    let reverseFormattedItemTotal = "".concat('$', "".concat(currentItemTotal, ".00"));

    // Update current item total
    itemInput.parentNode.nextElementSibling.firstElementChild.innerHTML = reverseFormattedItemTotal;
    
}



/* Nav */
function openNav() {
    document.getElementById("myNav").style.width = "150px";
    document.getElementById("myNav").style.marginLeft = "-500px";
}
function closeNav() {
    document.getElementById("myNav").style.width ="0";
}


/* loggin */
function popUp(){
    document.getElementById("log-in").classList.toggle("active");
}

/* 
    - elem.classList.add/remove(“class”) – thêm / bớt lớp.
    - elem.classList.toggle(“class”) – thêm lớp nếu nó không tồn tại, nếu không 
    thì xóa nó.
    - elem.classList.contains(“class”)- kiểm tra lớp đã cho, trả về true/false. 
*/

function correctLogin (){
    var account = document.getElementById('email').value
    var pass = document.getElementById('password').value
    if (account == ""){
        alert('Please enter your account')
        return false;
    }
    if (pass == ""){
        alert('Please enter your password')
        return false
    }
    return alert('Hello ' + account)
}



