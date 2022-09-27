const addedStorage = name =>{
    const cart = getStorageData();
    const quantity = cart[name];
    if (quantity) {
        cart[name] = quantity + 1;
    }
    else{
        cart[name] = 1;
    }
    localStorage.setItem('Order-meals', JSON.stringify(cart));
}
const getStorageData = ()=>{
    let cart = {};
    const storageCart = localStorage.getItem('Order-meals');
    if (storageCart) {
        cart = JSON.parse(storageCart);
    }
    return cart;
}

export {
    addedStorage,
    getStorageData
};