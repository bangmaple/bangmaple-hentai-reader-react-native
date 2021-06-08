import {Button, Text, View} from "react-native";
import React from "react";

export function DishDetail({navigation}) {
    return (
        <View>
            <Text>Dish detail component</Text>
            <Button title={"Go to Details... again"} onPress={() => navigation.push('DishDetail')}/>
            <Button title={"Go back"} onPress={() => navigation.goBack()}/>
        </View>
    );
}
