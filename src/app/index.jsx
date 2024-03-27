import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useQuery} from "@tanstack/react-query";
import {gql} from "graphql-request"

import ExcerciseList from "../components/ExcerciseList";
import client from "../graphqlClient"

const url = 'https://jequeri.stepzen.net/api/pouring-wolverine/__graphql'
const exercisesQuery = gql`
    query exercises($muscle: String, $name: String){
        exercises(muscle: $muscle, name: $name){
            name
            muscle
            equipment
        }
    }
`

export default function ExerciseScreen() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['exercises'],
        queryFn: () => client.request(exercisesQuery)
    });

    if (isLoading) {
        return <ActivityIndicator/>
    }

    if (error) {
        return <Text>Failed to fetch exercises</Text>
    }

    return (
        <View style={styles.container}>
            <ExcerciseList exercises={data?.exercises}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
});
