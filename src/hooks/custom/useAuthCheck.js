import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
    const [user, setUser] = useState(null);
    const [tokenValid, setTokenValid] = useState(false);
    const [authStateReady, setAuthStateReady] = useState(false);

    useEffect(() => {
        isLoggedIn();
    }, []);

    const isLoggedIn = async () => {
        AsyncStorage.getItem('userInfo').then(async (result) => {
            const userInfo = JSON.parse(result);
            console.log(userInfo);
            userInfo && setUser(userInfo);
            userInfo && setTokenValid(true);
            userInfo && setAuthStateReady(true);
        });
    };

    return { user, setUser, tokenValid, ready: authStateReady };
}
