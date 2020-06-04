import React, { PureComponent } from 'react'
import{Container,Content,
    Text, Thumbnail,Input, Button,View, Icon, Form,Label,Radio,DatePicker,
    Item,Picker} from 'native-base';
import assets from '../../assets/asset';
import style from './Style'

export class SignUp_Detail extends PureComponent {

    constructor(props){
        super(props)
       
        this.state={
            profile_for:undefined
        }
    }

    onValueChange(value){
        this.setState({
            profile_for:value
        })
    }


    render() {
        return (
            <Container style={style.Container}>
                <Content showsVerticalScrollIndicator={false}>
                   <Form>
                        <Text style={style.label}>
                        Profile for <Text style={{color:assets.color.theme}}>*</Text></Text>
                        <Item picker style={style.picker}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ fontSize:18 }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.profile_for}
                                onValueChange={this.onValueChange.bind(this)}>

                                <Picker.Item label="Self" value="self" />
                                <Picker.Item label="Son" value="son" />

                            </Picker>
                        </Item>

                        <Text style={style.label}>
                        First Name <Text style={{color:assets.color.theme}}>*</Text></Text>
                        
                        <Input style={style.input}
                            placeholder="Enter first name"
                            placeholderTextColor={assets.color.grey}/>

                           

                        <Text style={style.label}>
                        Last Name <Text style={{color:assets.color.theme}}>*</Text></Text>
                        
                        <Input style={style.input}
                            placeholder="Enter last name"
                            placeholderTextColor={assets.color.grey}/>
                    

                        <Text style={style.label}>
                        Email Id <Text style={{color:assets.color.theme}}>*</Text></Text>
                        
                        <Input style={style.input}
                            placeholder="Enter Email Id"
                            placeholderTextColor={assets.color.grey}/>
                        

                        <Text style={style.label}>
                        Gender <Text style={{color:assets.color.theme}}>*</Text></Text>
                        <Item style={{marginTop:10,marginBottom:10,borderBottomWidth:0}}>
                            <View style={{flexDirection:"row",marginRight:20}}>
                                <Radio color={assets.color.theme}
                                selectedColor={assets.color.theme}
                                selected={true} />
                                <Text style={{marginLeft:15,marginTop:2}}>Male</Text>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <Radio 
                                color={assets.color.theme}
                                selectedColor={assets.color.theme}
                                selected={false} />
                                <Text style={{marginLeft:15,marginTop:2}}>Female</Text>
                            </View>
                        </Item>

                        <Text style={style.label}>
                        DOB <Text style={{color:assets.color.theme}}>*</Text></Text>
                        <View style={style.input}>
                            <DatePicker
                                defaultDate={new Date()}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date()}
                                locale={"en"}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: assets.color.theme }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                            />  
                        </View>
                         
                        

                        <Text style={style.label}>
                        Main Caste <Text style={{color:assets.color.theme}}>*</Text></Text>
                        <Item picker style={style.picker}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.profile_for}
                                onValueChange={this.onValueChange.bind(this)}>

                                <Picker.Item label="Self" value="self" />
                                <Picker.Item label="Son" value="son" />

                            </Picker>
                        </Item>
                        <Text style={style.label}>
                        Caste <Text style={{color:assets.color.theme}}>*</Text></Text>
                        <Item picker style={style.picker}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.profile_for}
                                onValueChange={this.onValueChange.bind(this)}>

                                <Picker.Item label="Self" value="self" />
                                <Picker.Item label="Son" value="son" />

                            </Picker>
                        </Item>

                        <Button style={style.signup_btn}
                            danger block>
                        <Text style={style.generateopt_txt}>
                            Continue</Text>
                    </Button>

                   </Form>
                </Content>
            </Container>
        )
    }
}

export default SignUp_Detail
