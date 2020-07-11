import { AsyncStorage } from 'react-native';
import axios from 'axios';
import * as actionType from '../constant/actionType';
import * as constant from '../constant/constant';
import request from './apiAction'

const hasError=(status,error)=>{
    return{
        type:actionType.PROFILE_ERROR,
        isError:status,
        error:error
    }
}

const onComplete=(profiles)=>{
    return{
        type:actionType.PROFILE_LOADED,
        data:profiles,
    }
}

const getProfiles=(dispatch)=>{
    
    dispatch(request.apiRequest(true))

    axios.get(actionType.API_URL,{
        header:{
            'Authorization':'JWT '+AsyncStorage.getItem(costant.TOKEN);
        }
    })
    .then((res)=>{
        if(res.status==200){
            dispathch(request.apiRequest(false)),
            dispatch(onComplete(res.json())),
        }
    })
    .catch((error)=>{
        dispatch(hasError(true,error));
    })
}