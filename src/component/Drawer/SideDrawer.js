import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import style from './Style'

export class SideDrawer extends Component {
    render() {
        return (
          <Container>
              <Content>
                    <View style={style.main_view}>
                        <View style={style.left_view}>

                        </View>
                        
                        <View style={style.right_view}>

                        </View>
                    </View>
              </Content>
          </Container>
        )
    }
}

export default SideDrawer
