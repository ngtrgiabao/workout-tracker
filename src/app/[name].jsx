import {Text, View, StyleSheet, ScrollView, ActivityIndicator} from "react-native-web";
import {useLocalSearchParams, Stack} from "expo-router";
import {useState} from "react";
import {gql} from "graphql-request";
import {useQuery} from "@tanstack/react-query";

import graphqlClient from "../graphqlClient";
import NewSetInput from "../components/NewSetInput";

const exercisesQuery = gql`
    query exercises($name: String){
        exercises(name: $name){
            name
            muscle
            instructions
            equipment
        }
    }
`

export default function ExcerciseDetailsScreen() {
    const {name} = useLocalSearchParams();
    const {data, isLoading, error} = useQuery({
        queryKey: ['exercises', name],
        queryFn: () => graphqlClient.request(exercisesQuery, {name})
    });

    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

    if (isLoading) {
        return <ActivityIndicator/>
    }

    if (error) {
        return <Text>Failed to fetch exercises</Text>
    }

    const exercise = data.exercises[0];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{title: exercise.name}}/>

            <View style={styles.panel}>
                <Text>
                    Excercise Details {exercise.name}
                </Text>

                <Text style={styles.exerciseSubtitle}>
                    <Text style={styles.subValue}>
                        {exercise.muscle}
                    </Text>
                    {" | "}
                    <Text style={styles.subValue}>
                        Equipment: {exercise.equipment}
                    </Text>
                </Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0 : 3}>
                    {exercise.instructions}
                </Text>
                <Text onPress={() => setIsInstructionExpanded(!isInstructionExpanded)} style={styles.seeMore}>
                    {isInstructionExpanded ? "See less." : "See more."}
                </Text>
            </View>

            <NewSetInput />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10,
    },
    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray'
    },
    subValue: {
        textTransform: 'capitalize'
    },
    exerciseSubtitle: {
        color: 'dimgray'
    },
    instructions: {
        fontSize: 16,
        lineHeight: 22,
    },
    seeMore: {
        alignSelf: 'center',
        padding: 5,
        fontWeight: '600',
        color: 'gray',
    }
})