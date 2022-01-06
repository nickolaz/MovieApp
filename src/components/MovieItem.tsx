import React, { memo } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Movie from "../models/entitys/Movie.entity";
import { WHITE } from "../styles/colors";
import { boxShadow, margin, padding, scaleSize } from '../styles/mixins';
import { FONT_SIZE_12, FONT_SIZE_16, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR } from "../styles/typography";

interface MovieItemProps {
    movie: Movie;
    onPress: () => void;
};

const MovieItem = memo(({ movie  , onPress}: MovieItemProps) => {
  return (
    <TouchableOpacity  onPress={onPress}  style={[ boxShadow('gray') , margin( 5 , 10 , 5 , 10 ) , styles.container  ]} >
        <View style={[{flexDirection: 'row' } , padding( 10 , 10 , 10 , 10 )]}>
            <Image source={{ uri: movie.Poster }} style={styles.img} />
            <View style={[ margin( 0 , 0 , 0 , 20 ) , styles.txtContainer ]}>
                <Text numberOfLines={2} style={styles.txtTitle} >
                    {movie.Title}
                </Text>
                <Text numberOfLines={10} style={styles.txtContent} >
                    {movie.Plot}
                </Text>
                <Text numberOfLines={2} style={styles.txtContent} >
                    Rating: {movie.imdbRating}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
});

export default MovieItem;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1 , 
        borderColor: 'gray' , 
        borderRadius: scaleSize(20) , 
        backgroundColor: WHITE
    },
    img : {
        borderRadius: scaleSize(8) , 
        width: scaleSize(100) , 
        height: scaleSize(140)
    },
    txtContainer : {
        flexDirection: 'column' , 
        justifyContent: 'space-between' ,
        flex : 1
    },
    txtTitle : {
        fontSize: FONT_SIZE_16 , 
        fontWeight: FONT_WEIGHT_BOLD
    },
    txtContent : {
        fontSize: FONT_SIZE_12 , 
        fontWeight: FONT_WEIGHT_REGULAR
    }
});