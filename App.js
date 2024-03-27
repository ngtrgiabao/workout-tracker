import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import exercises from "./assets/data/exercises.json"
import ExcerciseList from "./src/components/ExcerciseList";

export default function App() {
    return (
        <View style={styles.container}>
            <ExcerciseList exercises={exercises}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        padding: 10
    },
});
