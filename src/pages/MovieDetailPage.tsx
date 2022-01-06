import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearMovieDetail, getMovieDetail } from '../actions/movies.actions';
import Spinner from '../components/Spinner';
import MovieDetailResponse from '../models/responses/MovieDetail.response';
import { RootStackParamList } from '../routers/AppRouter';
import { RootState } from '../store/store';
import { WHITE } from '../styles/colors';
import { scaleSize, WINDOW_WIDTH } from '../styles/mixins';
import { FONT_SIZE_12, FONT_SIZE_14, FONT_SIZE_16, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR } from '../styles/typography';

interface MovieDetailPageProps {
    navigation: NativeStackNavigationProp<RootStackParamList, 'MovieDetail'>;
    route: RouteProp<{ params: { imdbID: string } }, 'params'>;
};

const MovieDetailPage = ({ route , navigation } : MovieDetailPageProps ) => {

    const { imdbID } = route.params;
    const dispatch = useDispatch();
    const [ loading , setLoading ] = useState<boolean>(true);
    const { movieDetail } : { movieDetail : MovieDetailResponse} = useSelector( (state : RootState) => state.movies );
    
    useEffect(() => {
        dispatch(getMovieDetail(imdbID));
        setLoading(false);
        return () => {
            dispatch(clearMovieDetail());
        }
    }, [  ]);

    return (
        <View style={{ flex: 1 , backgroundColor: WHITE}}>
            {
                loading || ( movieDetail === null ) ?
                    <View style={styles.container}>
                        <Spinner />
                    </View>
                :
                    <View style={{ flex: 1}}>
                        <Image source={{ uri: movieDetail.Poster }} style={styles.img} />
                        <Text style={styles.txtTitle} numberOfLines={2} >
                            {movieDetail.Title}
                        </Text>
                        <View style={{ flexDirection: 'row' , marginTop: scaleSize(10)}}>
                            <View style={{ flexDirection: 'column' , flex: 0.2}}>
                                <Text style={styles.txtSubTitle} numberOfLines={3} >
                                    Rating
                                </Text> 
                                <Text style={styles.txtContent} numberOfLines={3} >
                                    {movieDetail.imdbRating}
                                </Text> 
                            </View>
                            <View style={{ flexDirection: 'column' , flex: 0.5}}>
                                <Text style={styles.txtSubTitle} numberOfLines={3} >
                                    Director
                                </Text> 
                                <Text style={styles.txtContent} numberOfLines={3} >
                                    {movieDetail.Director}
                                </Text> 
                            </View>
                            <View style={{ flexDirection: 'column' , flex: 0.3}}>
                                <Text style={styles.txtSubTitle} numberOfLines={3} >
                                    Genero
                                </Text> 
                                <Text style={styles.txtContent} numberOfLines={3} >
                                    {movieDetail.Genre}
                                </Text> 
                            </View>
                        </View>
                        <Text style={styles.txtSubTitle} numberOfLines={3} >
                            Actores
                        </Text> 
                        <Text style={[styles.txtContent , { marginTop: scaleSize(5) }]} numberOfLines={3} >
                            {movieDetail.Actors}
                        </Text> 
                        <Text style={[ styles.txtSubTitle , , { marginTop: scaleSize(10) }]} numberOfLines={3} >
                            Sinopsis
                        </Text> 
                        <Text style={[styles.txtContent , { marginTop: scaleSize(5) }]} numberOfLines={20} >
                            {movieDetail.Plot}
                        </Text> 
                    </View>
            }
        </View>
    );
};

export default MovieDetailPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        justifyContent: 'center',
    },
    img : {
        width: WINDOW_WIDTH, 
        height: scaleSize(300),
        resizeMode: 'stretch'
    },
    txtTitle : {
        fontSize: FONT_SIZE_16 , 
        fontWeight: FONT_WEIGHT_BOLD,
        textAlign: 'center',
        marginTop: scaleSize(5)
    },
    txtContent : {
        fontSize: FONT_SIZE_12 , 
        textAlign: 'center',
        fontWeight: FONT_WEIGHT_REGULAR
    },
    txtSubTitle : {
        fontSize: FONT_SIZE_14 , 
        textAlign: 'center',
        fontWeight: FONT_WEIGHT_BOLD
    },
});