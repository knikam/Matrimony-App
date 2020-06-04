import React, { Component } from 'react';
import { Container,Content, 
        View, Text, Item, Picker,Icon  } from 'native-base';
import { Chip } from 'react-native-paper';
import style from "./Style"
import assets from '../../assets/asset'



const dataSource = ["10th", "12th", "Engineer", "Doctor"]
export class Filter extends Component {

    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <View>
                        <View style={style.card}>
                            <Text style={style.head_text}><Text style={{fontWeight:"bold"}}>Age</Text> should be between</Text>
                            <View style={style.row_view}>
                                <Text style={style.text}>Min</Text>
                                <Item picker style={style.picker}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ color:assets.color.theme }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                    
                                        // onValueChange={this.onValueChange.bind(this)}
                                        >
                                            
                                        <Picker.Item label="22 Yrs" value="22" />
                                    </Picker>
                                </Item>

                                <View style={style.dash_line}></View>

                                <Text style={style.text}>Max</Text>
                                <Item picker style={style.picker}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ color:assets.color.theme }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        
                                        // onValueChange={this.onValueChange.bind(this)}
                                        >

                                        <Picker.Item label="28 Yrs" value="28" />
                                    </Picker>
                                </Item>
                            </View>
                        </View>

                        <View style={style.card}>
                            <Text style={style.head_text}><Text style={{fontWeight:"bold"}}>Height</Text> should be between</Text>
                            <View style={style.row_view}>
                                <Text style={style.text}>Min</Text>
                                <Item picker style={style.picker}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ color:assets.color.theme }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        
                                        // onValueChange={this.onValueChange.bind(this)}
                                        >

                                         <Picker.Item label="5'5 Ft" value="5'5" />

                                        </Picker>
                                </Item>
                                <View></View>
                                <Text  style={style.text}>Max</Text>
                                <Item picker style={style.picker}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ color:assets.color.theme }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        
                                        // onValueChange={this.onValueChange.bind(this)}
                                        >

                                        <Picker.Item label="5'8 Ft" value="5'8" />

                                        </Picker>
                                </Item>
                            </View>
                        </View>
                        <View style={style.card}>
                            <Text style={style.head_text}><Text style={{fontWeight:"bold"}}>Cast</Text> should be</Text>
                            <Item picker style={style.cast_picker}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{color:assets.color.theme }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        
                                        // onValueChange={this.onValueChange.bind(this)}
                                        >

                                        <Picker.Item label="Maratha" value="Maratha" />

                                        </Picker>
                            </Item>    
                        </View>
                        <View style={style.card}>
                            <Text style={style.head_text}><Text style={{fontWeight:"bold"}}>Education</Text> should be</Text>
                            <Item picker style={style.cast_picker}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{color:assets.color.theme }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        
                                        // onValueChange={this.onValueChange.bind(this)}
                                        >

                                        <Picker.Item label="10 th" value="10" />

                                        </Picker>
                            </Item>
                           <View style = {style.chips_view}>
                            {
                            dataSource.map((item, index) => {
                            return (
                                <View style={{
                                margin: 5,
                                flexWrap: 'wrap',
                                }}>
                                <Chip
                                mode="flat" //changing display mode, default is flat.
                                height={30} //give desirable height to chip
                                textStyle={{ color:'white',fontSize: 15 }} //label properties
                                style={{ backgroundColor: assets.color.theme }} //display diff color BG
                                onPress={() => Alert.alert('Clicked Chip'+ item)}>
                                {item}
                                </Chip>
                            </View>
                                );
                                })}
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Filter
