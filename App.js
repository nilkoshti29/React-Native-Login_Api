/*
import React,{Component} from 'react';
import { View, Text,Button,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class LoginScreen extends Component {

  static navigationOptions={
    title:'Login',
  }
  constructor()
  {
      super();
      this.state = { 
          user_email: '',
          user_password:'',
      
        ActivityIndicator_Loading: false, 

      }
  }

  Insert_Data_Into_MySQL = () =>
  {
      this.setState({ ActivityIndicator_Loading : true }, () =>
      {
          fetch('http://192.168.1.122:3000/login-api',
          {
              method: 'POST',
              headers: 
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                  user_email : this.state.User_email,
                  user_password: this.state.User_password,

              })

          }).then((response) => response.json()).then((responseJsonFromServer) =>
          {
              alert(responseJsonFromServer);

              this.setState({ ActivityIndicator_Loading : false });

          }).catch((error) =>
          {
              console.error(error);

              this.setState({ ActivityIndicator_Loading : false});
          });
      });
  }

  render()
  {
      return(

          <View style = { styles.MainContainer }>
              <TextInput  
                placeholder = "Enter User Email" 
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ User_email: TextInputText })} />
              
              
              <TextInput  
                placeholder = "Enter User Password" 
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ User_password: TextInputText })} />


              <TouchableOpacity 
                activeOpacity = { 0.5 } 
                style = { styles.TouchableOpacityStyle } 
                onPress = { this.Insert_Data_Into_MySQL }>

                  <Text style = { styles.TextStyle }>Login</Text>

              </TouchableOpacity>
              {
      
                   this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
      
              }
             
              
          </View>
      );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Profile',
  };
  render(){
    const { navigation } = this.props;  
    const username = navigation.getParam('username'); 
    const password = navigation.getParam('password'); 
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{ fontSize:50}}>Profile Screen</Text>  
                <Text >Username: {JSON.stringify(username)}</Text> 
                <Text >Password: {JSON.stringify(password)}</Text>   
        <Button
            title="Go To Home"
            onPress={()=> this.props.navigation.navigate('Home')}
          />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create(
  {
      MainContainer:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
   
      },
   
      TextInputStyleClass:
      {
   
        textAlign: 'center',
        height: 40,
        backgroundColor : "#fff",
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7 ,
        marginBottom: 10,
        width: '95%'
      },
   
      TouchableOpacityStyle:
     {
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#009688',
        marginBottom: 20,
        width: '90%'
   
      },
   
      TextStyle:
      {
         color: '#fff',
          textAlign: 'center',
          fontSize: 18
      },
   
      ActivityIndicatorStyle:{
        
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      
    }
  });
*/
 import React, { Component } from 'react';
 
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Importing Stack Navigator library to add multiple activities.
//import { StackNavigator } from 'react-navigation';
 
// Creating Login Activity.
class LoginActivity extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'LoginActivity',
   };
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      user_email: '',
      user_password: ''
 
    }
 
  }
  
UserLoginFunction = () =>{
 
 const { user_email }  = this.state ;
 const { user_password }  = this.state ;
 
 
fetch('http://192.168.1.125:3000/login-api', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    user_email: user_email,
    user_password: user_password
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Second', { user_email: user_email });
        }
        else{
          Alert.alert(JSON.stringify(responseJson));
        }
      }).catch((error) => {
        console.error(error);
      });
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.TextComponentStyle}>User Login Form</Text>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
 
          onChangeText={user_email => this.setState({user_email})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
 
          onChangeText={user_password => this.setState({user_password})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
        <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
      
  
 
</View>
            
    );
  }
}
 
// Creating Profile activity.
class ProfileActivity extends Component
{
 
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'ProfileActivity',
    
   };
    
 
   render()
   {
 
     const {goBack} = this.props.navigation;
 
      return(
         <View style = { styles.MainContainer }>
 
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.user_email } </Text>
 
            <Button title="Click here to Logout" onPress={ () => goBack(null) } />
 
         </View>
      );
   }
}
 
const RootStack = createStackNavigator(
  {
    Login: LoginActivity,
    Profile: ProfileActivity,
  },
  {
    initialRouteName: 'Login',
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
},
 
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});
