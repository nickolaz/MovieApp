import React, { memo } from "react";
import { Text, View } from "react-native";

const EmpyItem = memo(() => {
    return (
        <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
            <Text>No hay resultados</Text>
        </View>
    );
});

export default EmpyItem;
