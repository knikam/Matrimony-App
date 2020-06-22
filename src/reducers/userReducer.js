import * as actionType from '../constant/actionType';

const initialState={
    isLogin:false,
    isError:false,
}

export default (state=initialState, action)=>{

    switch (action.actionType) {
        
        case actionType.IS_LOGGED:
            return isLogin:action.isLogin,
            break;

        case actionType.LOGIN_SUCCESS:
            return {},
            break;

        case actionType.LOGIN_FAILURE
            return isError:action.isError,
            break;

        case actionType.REGISTER_SUCCESS:
            return {},
            break;

        case actionType.REGISTER_FAILURE:
            return isError:action.isError,
            break;
        default:
            state;
    }

}