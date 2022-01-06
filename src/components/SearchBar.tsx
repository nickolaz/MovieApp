import { Picker } from "@react-native-picker/picker";
import React, { memo } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { WHITE } from "../styles/colors";
import { margin, padding, scaleSize, WINDOW_WIDTH } from "../styles/mixins";

interface SearchBarProps {
    placeholder: string;
    valueSelected: string;
    txtValue: string;
    onChangeSelect: (text: string , index : number) => void;
    onChangeText: (text: string) => void;
    onPress: () => void;
};

const SearchBar  = memo(({ placeholder , valueSelected , txtValue , onChangeText , onChangeSelect , onPress } : SearchBarProps) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} value={txtValue} onChangeText={onChangeText} 
                style={[ padding( 10 , 10 , 10 , 10 ) , margin( 10 , 10 , 10 , 10 ), styles.txtInput ]} 
            />
            <View style={styles.pickerContainer} >
                <Picker selectedValue={valueSelected} onValueChange={onChangeSelect} itemStyle={{ height: scaleSize(40) }} >
                    <Picker.Item label="Titulo" value="title" />
                    <Picker.Item label="Año" value="year" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={onPress}>
                <Icon name="search" size={25} color={WHITE} />
            </TouchableOpacity>
        </View>
    );
});

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row' ,
        width: WINDOW_WIDTH
    },
    txtInput: {
        flex: 1 , 
        borderRadius: scaleSize(10) , 
        borderWidth: 1 , 
        borderColor: 'gray' , 
        height: scaleSize(40)
    },
    pickerContainer: {
        width: scaleSize(130),
        marginTop: 10,
        height: scaleSize(40),
        borderRadius: scaleSize(10) , 
        borderWidth: 1 , 
        borderColor: 'gray' 
    },
    searchBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 10,
        margin: 5,
        width: 40,
        marginTop: 10,
    }
});