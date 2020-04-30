import React, { Component } from 'react';
import { Container,Content, View, Thumbnail, Button } from 'native-base';
import style from '../IdentityVerification/Style';
import assets from '../../assets/asset';

class IdentityVerification extends Component {
  render() {
    return (
      <Container style={style.Container}>
          <Content showsVerticalScrollIndicator={false}>
            <Text style={style.aadhar_txt}>
            {assets.enstring.IdentityVerificationScreen.Aadhar_card}</Text>

            <Text style={style.front_txt}>
            {assets.enstring.IdentityVerificationScreen.front}</Text>

            <View style={style.front_view}> 
                 <Thumbnail style={style.upload_image}
                 square ></Thumbnail>
                 <Text style={scan_txt}>
                     {assets.enstring.IdentityVerificationScreen.scan_front}</Text>
            </View>

            <View style={style.back_view}> 
                 <Thumbnail style={style.upload_image}
                 square ></Thumbnail>
                 <Text style={scan_txt}>
                     {assets.enstring.IdentityVerificationScreen.scan_back}</Text>
            </View>
            
            <Text style={style.biodata_txt}>
                {assets.enstring.IdentityVerificationScreen.biodata}</Text>
            
            <View style={style.footer_view}>
                <Button style={style.Skip_btn}
                primary rounded></Button>
                
                <Button style={style.continue_btn}
                danger rounded></Button>
            </View>
          </Content>
      </Container>
    );
  }
}

export default IdentityVerification;
