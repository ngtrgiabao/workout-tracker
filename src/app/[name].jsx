import {Text, View, StyleSheet, ScrollView} from "react-native-web";
import {useLocalSearchParams, Stack} from "expo-router";

import excercises from "../../assets/data/exercises.json"


export default function ExcerciseDetailsScreen() {
    const params = useLocalSearchParams();

    const excercise = excercises.find(item => item.name === params.name)

    if (!excercise) {
        return <Text>Excercise not found</Text>
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{title: excercise.name}} />
            
            <View style={styles.panel}>
                <Text>
                    Excercise Details {excercise.name}
                </Text>

                <Text style={excercise.exerciseSubtitle}>
                    <Text style={styles.subValue}>
                        {excercise.muscle}
                    </Text>
                    {" | "}
                    <Text style={styles.subValue}>
                        Equipment: {excercise.equipment}
                    </Text>
                </Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.instructions}>
                    {excercise.instructions}
                </Text>
            </View>               
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
    instructions: {
        fontSize: 16,
        lineHeight: 22,
    }
})