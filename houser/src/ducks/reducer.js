const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    mortgage: 0,
    rent: 0
}

const PLACE_INFO = 'PLACE_INFO';
const IMAGE_INFO = 'IMAGE_INFO';
const PAYMENT_INFO = 'PAYMENT_INFO';


function reducer(state=initialState, action){
    switch(action.type) {
        case PLACE_INFO:
            return Object.assign( {}, state, {placeObj: action.payload} );

        case IMAGE_INFO:
            return Object.assign( {}, state, {imageURL: action.payload} );

        case PAYMENT_INFO:
            return Object.assign( {}, state, {paymentObj: action.payload} );
    }
}

export function updatePlace(placeObj){
    return {
    type: PLACE_INFO,
    payload: placeObj
    }
}
export function updateImage(imageURL){
    return {
    type: IMAGE_INFO,
    payload: imageURL
    }
}
export function updatePayment(paymentObj){
    return {
    type: PAYMENT_INFO,
    payload: paymentObj
    }
}


export default reducer;