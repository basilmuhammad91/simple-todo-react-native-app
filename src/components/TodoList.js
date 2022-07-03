import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

// import expo icons
import { Entypo } from '@expo/vector-icons';
import { deleteTask } from '../redux/taskSlice';

const TodoList = () => {

    const data = [
        {
            id: 1,
            title: 'Hello World',
        },
        {
            id: 2,
            title: 'Hello Universe',
        }
    ];

    const todos = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(
            deleteTask  ({
                id: id,
            }),
        )
    }

    // render function with a delete button
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                    style={
                        styles.deleteButton
                    }
                    onPress={() => {
                        onDelete(item.id)
                    }}
                >
                    <Text style={styles.delete}>
                        <Entypo name="trash" size={24} color="red" />
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
            <FlatList
                vertical={true}
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default TodoList

// styles for this component
const styles = StyleSheet.create({

    // item style
    item: {
        backgroundColor: '#53BDEB',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    // title
    title: {
        fontSize: 20,
    },

    // delete button style
    delete: {
        fontSize: 24,
        color: 'red',
    }

})