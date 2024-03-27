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
        backgroundColor: "ghostwhite",
        padding: 10,
        borderRadius: 10,
        gap: 5,
        marginHorizontal: 2,


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
    }
});
