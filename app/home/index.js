import React from 'react'
import { useEffect } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { GET_ALL_USERS_INFO_REQUEST } from '../models/user/actions';


const mapStateToProps = (state, props) => {
    const { id, name, imageUrl } = state.user

    return { id, name, imageUrl }
}

const mapDispatchToProps = (dispatch, props) => ({
    getAllUserInfo: () => {
        dispatch({
            type: GET_ALL_USERS_INFO_REQUEST,
            payload: {}
        })
    }
})

const HomeView = ({ id, name, imageUrl, getAllUserInfo, navigation }) => {
    // navigation.navigate('Login')
    // console.log('navigation', navigation)
    useEffect(() => {
        getAllUserInfo()
    }, [])
    return (
        <View>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{imageUrl}</Text>
        </View>
    )
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView)

export { Home }