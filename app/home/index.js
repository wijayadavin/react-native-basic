import React from 'react'
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { GET_ALL_USERS_INFO_REQUEST } from '../models/user/actions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
    cardPost: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: 400,
        height: 800,
        // marginBottom:100,
        alignContent: "center"
    },
    cardPostImage: {
        width: wp('100%'),
        height: hp('40%'),
        marginTop: 1,
        marginBottom: 1,
        marginLeft: -wp('1.65%'),
        alignSelf: 'center'
    },
    photoNotif1: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 50,
        position: "absolute",
        left: 15,
        top: 6
    },
    profileName: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
        marginTop: 10,
        flexDirection: "row"
    },
    commentBox: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%'
    },
    containNotif: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '100%',
        borderBottomColor: 'lightgrey',
        backgroundColor: 'white',
    },
    photoNotif: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBottom: 10
    },
    modalTextName: {
        marginLeft: 10,
        fontWeight: "bold"
    },
    modalTextNotif: {
        width: 327,
        marginBottom: 15,
        marginLeft: 7,
        flexWrap: "wrap",
    },
});


const HomeView = ({ id, name, imageUrl, getAllUserInfo, navigation }) => {
    // navigation.navigate('Login')
    // console.log('navigation', navigation)
    useEffect(() => {
        getAllUserInfo()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.profileName}>Name: <Text>{name}</Text></Text>
            <Image
                style={styles.cardPostImage}
                source={{
                    uri: imageUrl,
                }} />
        </View>
    )
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView)

export { Home }