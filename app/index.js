// import React from 'react'
// import { View } from 'react-native'
// import { Navigation } from './utils/router'


// const App = ({ }) => (
//     < View style={{ flex: 1, flexDirection: 'column' }}>
//         <Navigation />
//     </View >
// )

import React from 'react'
import { connect } from 'react-redux'

//Navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//Screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainNavigator from './MainNavigator'

function App(props) {
    return (
        <Stack.Navigator headerMode='none'>
            { props.verify ? <Stack.Screen name='Home' component={MainNavigator} />
                : (
                    <>
                        <Stack.Screen name='Login' component={LoginScreen} />
                        <Stack.Screen name='Register' component={RegisterScreen} />
                    </>
                )}
        </Stack.Navigator>
    )
}

const reduxState = (state) => ({
    verify: state.login.isLoggedIn,
})

const reduxDispatch = (dispatch) => ({

})

export default connect(reduxState, reduxDispatch)(App);