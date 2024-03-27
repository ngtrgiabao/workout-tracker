import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from "./assets/data/exercises.json"

export default function App() {
  console.log(exercises)
  const excercise = exercises[0]

  return (
    <View style={styles.container}>
      <View style={styles.excerciseContainer}>
        <Text style={styles.exerciseName}>
          {excercise.name}
        </Text>
        <Text style={styles.exerciseSubtitle}>
          {excercise.muscle.toUpperCase()} | Equipment: {excercise.equipment.toUpperCase()}
        </Text>
      </View>

      <StatusBar style="auto" />
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
  excerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray'
  }
});
