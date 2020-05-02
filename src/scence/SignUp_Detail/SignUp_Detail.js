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
                        Profile for *</Text>
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

                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input style={style.firstName_input}
                            placeholder="Enter first name"
                            placeholderTextColor={assets.color.grey}/>
                        </Item>

                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input style={style.firstName_input}
                            placeholder="Enter first name"
                            placeholderTextColor={assets.color.grey}/>
                        </Item>

                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input style={style.firstName_input}
                            placeholder="Enter first name"
                            placeholderTextColor={assets.color.grey}/>
                        </Item>

                        <Text style={style.label}>
                         Gender *</Text>
                        <Item>
                            <Radio selected={true} />
                            <Radio selected={false} />
                        </Item>

                        <Item stackedLabel>
                            <Label>DOB *</Label>
                            <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                            />
                        </Item>
                        

                        <Text style={style.label}>
                        Main cast *</Text>
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
                        cast *</Text>
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
