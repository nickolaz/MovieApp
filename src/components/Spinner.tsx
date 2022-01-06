import React from "react";
import { ActivityIndicator, Platform, StyleProp, View, ViewStyle } from "react-native";
import { PRIMARY } from "../styles/colors";

interface SpinnerProps {
    style?: StyleProp<ViewStyle>;
    color?: string;
    size?: number;
};

const Spinner = ({ style = {} , color = PRIMARY, size = 50 } : SpinnerProps) => {

    return (
        <View style={style} >
            {
                Platform.OS === 'ios' ?
                    <ActivityIndicator 
                        testID="spinner"
                        size="large"
                        color={color}
                    />
                :
                    <ActivityIndicator 
                        testID="spinner"
                        size={size}
                        color={color}
                    />
            }
        </View>
    );
};

export default Spinner;