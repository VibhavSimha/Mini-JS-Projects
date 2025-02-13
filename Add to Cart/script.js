document.addEventListener('DOMContentLoaded',()=>{
    let productList=document.getElementById('productList');
    let cart=document.getElementById('cart');
    let cartList=document.getElementById('cartList');
    let totalAmount=document.getElementById('totalAmount');
    let checkout=document.getElementById('checkout');
    let cartEmptyPara=document.getElementById('cartEmptyPara');

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [
        { id: 1, name: "Product 1", qty: 0, price: 25.5 },
        { id: 2, name: "Product 2", qty: 0, price: 30 },
        { id: 3, name: "Product 3", qty: 0, price: 20.5 }
    ];
    loadCart();
    productList.addEventListener('click',(event)=>
        {
            if(event.target && event.target.matches('.addItem')){
                let idSel=event.target.id;
                for (const item of cartItems){
                    if(item.id==idSel){
                        item.qty+=1;
                        saveLocalStorage();
                        loadCart();
                        break;
                    }
                }
            }
        })
    function saveLocalStorage()
    {
        cartItems.forEach(item => {
            item.total = item.price * item.qty;
        });
        localStorage.setItem('cart',JSON.stringify(cartItems));
    }
    function loadCart(){
        while(cartList.firstChild)cartList.firstChild.remove();
        let cartEmpty=true;
        cartItems.forEach(item => {
            if(item.qty)cartEmpty=false;
        });
        if(!cartEmpty){
            console.log("Cart Updated");
            console.log("Cart=",cartItems);
            
            let totalCost=0;
            cartItems.forEach(item => {
                if(item.qty){
                    let cartItem=document.createElement('li');
                    let itemName=document.createElement('p');
                    itemName.textContent=item.name;
                    let itemQty=document.createElement('p');
                    itemQty.textContent=`Qty: ${item.qty}`;
                    let itemTotal=document.createElement('p');
                    itemTotal.textContent=`Total: $${item.total}`;
                    let itemDelete=document.createElement('button');
                    itemDelete.textContent='Delete'
                    itemDelete.classList.add("deleteBtn");
                    itemDelete.id=item.id;
                    totalCost+=item.total;
                    cartItem.appendChild(itemName);
                    cartItem.appendChild(itemQty);
                    cartItem.appendChild(itemTotal);
                    cartItem.appendChild(itemDelete);

                    cartList.appendChild(cartItem);
                }
            });
            console.log("Total cost:",totalCost);
            totalAmount.style.marginTop='10px';
            totalAmount.textContent=`Total: $${totalCost}`;
            cartEmptyPara.classList.remove('notHiddenPara');
            cartEmptyPara.classList.add('hidden');
            cart.classList.remove('hidden');
        }
        else{
            console.log("Cart Empty");
            console.log("Cart=",cartItems);
            cartEmptyPara.classList.remove('hidden');
            cartEmptyPara.classList.add('notHiddenPara');
            cart.classList.add('hidden');
        }
        
    }


})