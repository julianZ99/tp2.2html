
var wishList=[];
var list=document.getElementById("productList");
var secondList=document.getElementById("wishlist");

function addItem(itemId){
    var p= document.getElementById('advice');
    if(wishList.includes(document.getElementById(itemId).innerHTML)){
        p.innerText="this item is already on the wishlist";
        p.style.color="red";
    }else{
        console.log(itemId);
        var li=document.createElement('li');
        var removebutton = document.createElement("button");
        removebutton.innerText= 'REMOVE'
        removebutton.onclick = removeItem;
        li.innerText=document.getElementById(itemId).innerHTML+' ';
        li.appendChild(removebutton);
        secondList.appendChild(li);
        wishList.push(document.getElementById(itemId).innerHTML);
        p.innerText="item added succesfully";
        p.style.color="green";
    }

function removeItem(){
    let listItem = this.parentNode;
    let wishlistview = listItem.parentNode;
    wishlistview.removeChild(listItem);

    const index = wishList.indexOf(document.getElementById(itemId).innerHTML);
    const x = wishList.splice(index, 1);
    console.log(wishList);
}

}