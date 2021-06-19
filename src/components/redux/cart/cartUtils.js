export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id)

    if(existingItem){
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity + 1}
            : cartItem)
    }

    return [...cartItems, {...itemToAdd, quantity : 1}]
}


export const removeItemFromCart = (cartItems, itemToRemove) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

    if(itemExists.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id
        ? {...cartItem, quantity : cartItem.quantity - 1}
        : cartItem
        )
}

export const deleteItemFromCart = (cartItems, itemToDelete) => {
    const itemExits = cartItems.find(cartItem => cartItem.id === itemToDelete.id)

    if(itemExits){
        return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id)
    }
}