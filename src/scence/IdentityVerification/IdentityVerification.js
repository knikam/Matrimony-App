import React, { Component } from 'react';
import { Container,Content, View, Thumbnail, Button, Text } from 'native-base';
import style from './Style';
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
                 <Thumbnail source={assets.images.Identity.upload}
                  style={style.upload_image}
                 square ></Thumbnail>
                 <Text style={style.scan_txt}>
                     {assets.enstring.IdentityVerificationScreen.scan_front}</Text>
            </View>

            <Text style={style.back_txt}>
            {assets.enstring.IdentityVerificationScreen.back}</Text>

            <View style={style.back_view}> 
                 <Thumbnail source={assets.images.Identity.upload}
                  style={style.upload_image}
                 square ></Thumbnail>
                 <Text style={style.scan_txt}>
                     {assets.enstring.IdentityVerificationScreen.scan_back}</Text>
            </View>
            
            <View style={style.footer_view}>
                <Button style={style.skip_btn}
                primary>
                  <Text>{assets.enstring.IdentityVerificationScreen.skip}</Text>
                </Button>
                
                <Button style={style.continue_btn}>
                  <Text>{assets.enstring.IdentityVerificationScreen.continue}</Text>
                </Button>
            </View>
          </Content>
      </Container>
    );
  }
}

export default IdentityVerification;
