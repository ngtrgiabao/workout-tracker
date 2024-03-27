import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import excercises from "../../assets/data/exercises.json";
import ExcerciseList from "../components/ExcerciseList";

export default function App() {
    return (
        <View style={styles.container}>
            <ExcerciseList exercises={excercises}/>
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
