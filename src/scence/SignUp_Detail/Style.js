import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
import { Picker } from 'native-base';

let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    container:{
        padding:50
    },

    label:{
        color:assets.color.grey,
        fontSize:15,
        marginLeft:15,
        marginTop:10
    },
    picker:{
        marginLeft:15
    },
    signup_btn:{
        borderRadius:2,
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        height:50
    }
})