import * as actionType from "../constant/actionType";

const initialState={
    isLoading:false,
}

export default (state=initialState, action)=>{

    switch (action.actionType) {
        case actionType.API_REQUEST:
            isLoading:action.isLoading,
            break;
    
        default:
            state;
    }
}