import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { MovieDetailsPage, MoviesPage } from "../pages";

export type RootStackParamList = {
    Movies: undefined;
    MovieDetail: { imdbID: string };
};

const AppRouter = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Movies" component={MoviesPage} />
                <Stack.Screen name="MovieDetail" component={MovieDetailsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppRouter;