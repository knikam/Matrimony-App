import React, { Component } from 'react'
import { ScrollView,StatusBar,} from 'react-native';
import { DrawerActions } from '@react-navigation/native';  
import { View, Container, Content, Header, Right, Text,Left,Button,Icon,Body,Title} from 'native-base'
import MyProfileList from '../../component/MatchProfileList/MatchProfileList'
import assets from '../../assets/asset';


export class MatchProfile extends Component {

    constructor(props){
        super(props);

        this.state={
            data:"",
        }
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:assets.color.theme}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Drawer")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Match Profile</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="md-bookmarks" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                     <ScrollView>
                        <MyProfileList data={this.state.data}></MyProfileList>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

export default MatchProfile