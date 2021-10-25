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




/* remove */

function removeCartItem(removingItem) {
    let currentItem = removingItem.parentNode.parentNode;
    if (confirm('Do you want to remove this product?')){
        currentItem.remove();
    }else {
        console.log('not remove')
    }
}//Remove button
function removeEmptyCart(removeEmpty){
    let removeItem = Number(removeEmpty.value);
    let qty = removeEmpty.parentNode.parentNode;
    if (removeItem === 0 && confirm('Do you want to remove this product?')){
        
        qty.remove();
    }else {
        console.log('not remove')
    }
}//Remove empty qty

function totalCost (){
    var priceOfAllProduct = document.querySelectorAll('.tag-total .tag-total-price')
    var sum = 0;
    for (let itemPrice of Object.values(priceOfAllProduct)) {
        temp1 = Number(itemPrice.innerHTML.replace('$',''));
        sum += temp1
        
    }
    let  totalCost = document.querySelector('#all-total')
    
    
    totalCost.replaceWith(`$${sum}.00`) 

    
}   


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





/* 
    - elem.classList.add/remove(“class”) – thêm / bớt lớp.
    - elem.classList.toggle(“class”) – thêm lớp nếu nó không tồn tại, nếu không 
    thì xóa nó.
    - elem.classList.contains(“class”)- kiểm tra lớp đã cho, trả về true/false. 
*/

