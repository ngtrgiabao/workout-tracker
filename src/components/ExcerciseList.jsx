import {StyleSheet, View, FlatList, Text} from 'react-native';

const ExcerciseItem = ({item}) => (
    <View style={styles.excerciseContainer}>
        <Text style={styles.exerciseName}>
            {item.name}
        </Text>
        <Text style={styles.exerciseSubtitle}>
            <Text style={styles.subValue}>
                {item.muscle}
            </Text>
            {" | "}
            <Text style={styles.subValue}>
                Equipment: {item.equipment}
            </Text>
        </Text>
    </View>
)


const ExcerciseList = ({exercises}) => {
    return (
        <FlatList
            data={exercises}
            keyExtractor={(item, idx) => item.name + idx}
            contentContainerStyle={{gap: 5}}
            renderItem={
                ({item}) =>
                    <ExcerciseItem item={item}/>
            }
        />
    )
}

export default ExcerciseList;

const styles = StyleSheet.create({
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
    },
    subValue: {
        textTransform: 'capitalize'
    }
});
