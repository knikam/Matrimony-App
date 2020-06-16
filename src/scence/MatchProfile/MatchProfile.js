import React, { Component } from 'react'
import { ScrollView,StatusBar,} from 'react-native';
import { DrawerActions } from '@react-navigation/native';  
import { connect } from "react-redux";
import { View, Container, Content, Header, Right, Text,Left,Button,Icon,Body,Title} from 'native-base'
import MyProfileList from '../../component/MatchProfileList/MatchProfileList'
import assets from '../../assets/asset';
import apiCall from "../../services/actions/actionCreator";
import ACTION_TYPES from "../../services/constant/Index"


export class MatchProfile extends Component {

    constructor(props){
        super(props);

        this.state={
            data:"",
        }
    }

    componentDidMount(){
       fetch("https://matrimony-backend-dev.herokuapp.com/v1/profiles",{
           method:"get",
           header:new Headers({
               'Authorization': "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMywidXNlcm5hbWUiOiIrOTE5MDQ5NjA5NzQ3IiwiZXhwIjoxNTkyMzk0NzExLCJlbWFpbCI6bnVsbCwicGhvbmUiOiIrOTE5MDQ5NjA5NzQ3In0.fxEeqaQ4Zm3I7Y9NIWBGfVGPXuk_6UiW6xImE2LUtyM" 
           })
       })
       .then(res=>res.json())
       .then((responseJson)=>{
           console.log(responseJson)
           this.setState({
                data:responseJson
           })
       })
       .catch(error=>console.log(error)) //to catch the errors if any
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

const mapDispatchToProps = dispatch => ({
  apiCall: url => dispatch(apiCall(url))
});

const mapStateToProps = state => ({
  data: state.apiReducer.data,
  error: state.apiReducer.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchProfile);
