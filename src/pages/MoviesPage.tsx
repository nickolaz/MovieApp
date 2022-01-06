import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions/movies.actions';
import Spinner from '../components/Spinner';
import { RootStackParamList } from '../routers/AppRouter';
import { RootState } from '../store/store';
import { WHITE } from '../styles/colors';
import MovieItem from '../components/MovieItem';
import SearchBar from '../components/SearchBar';
import Movie from '../models/entitys/Movie.entity';
import { scaleSize } from '../styles/mixins';
import EmpyItem from '../components/empyItem';

interface MoviesPageProps {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Movies'>;
};

const MoviesPage = ({ navigation } : MoviesPageProps) => {

    const itemHeight = scaleSize(150);
    const dispatch = useDispatch();
    const { moviesList } = useSelector( (state : RootState) => state.movies );
    const [ loading , setLoading ] = useState<boolean>(true);
    const [ searchType , setSearchType ] = useState<string>('title');
    const [ searchValue , setSearchValue ] = useState<string>('');

    useEffect(() => {
        dispatch(getMovies());
        setLoading(false);
    }, [  ]);

    const onChangeSelect = (text : string , index : number)=> setSearchType(text);

    const onChangeText = (text : string) => setSearchValue(text);

    const search = () => {
        setLoading(true);
        if(searchType == 'year') {
            dispatch(getMovies( undefined , Number(searchValue) ));    
        } else {
            const value = searchValue == '' ? 'movie' : searchValue;
            dispatch(getMovies(value));
        }
        setLoading(false);
    };

    const renderItem = useCallback(
        ({ item } : { item : Movie }) => 
            <MovieItem movie={item} onPress={() => navigation.navigate('MovieDetail' , { imdbID : item.imdbID })}/> , 
        []
    );

    const keyExtractor = useCallback(
        (item : Movie) => item.imdbID ,
        []
    );

    const getItemLayout = useCallback(
        (data : Movie[] | null | undefined , index : number) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
        }),
        [itemHeight],
    );

    return (
        <View style={{ flex: 1 , backgroundColor: WHITE}}>
            {
                loading ?
                    <View style={styles.container}>
                        <Spinner />
                    </View>
                :
                    <View style={{ flex: 1}}>
                        <SearchBar placeholder={'Ingrese su busqueda'} valueSelected={searchType} txtValue={searchValue}
                            onChangeText={onChangeText} onPress={search} onChangeSelect={onChangeSelect}
                        />
                        <FlatList
                            data={moviesList}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            getItemLayout={getItemLayout}
                            ListEmptyComponent={EmpyItem}
                            initialNumToRender={10}
                        />
                    </View>
            }
        </View>  
    );
};

export default MoviesPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        justifyContent: 'center',
    }
});