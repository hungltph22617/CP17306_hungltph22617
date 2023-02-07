import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Demo11 = ({ navigation, route }) => {
    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <View style={{ flex: 2, backgroundColor: 'yellow' }} />
            <View style={{ flex: 3, backgroundColor: 'pink' }} >
                <Text>Màn 1: {route.params.itemId} - {route.params.name}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Demo11;