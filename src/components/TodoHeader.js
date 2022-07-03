import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from '../redux/taskSlice';

const TodoHeader = () => {

    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();

    const onSubmitTask = () => {

      if(todo.trim().length === 0)
      {
        Alert.alert('Enter any todo');
        return;
      }
        dispatch(
          addTask({
            task: todo,
          })
        );
        setTodo('');
    };

  return (
    <View>

    {/* Todo List Heading */}
      <Text style={{ 
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 50,
       }}>Todo List</Text>

       {/* Text Input */}
       
      <View style={{ 
        justifyContent: 'center',
        alignItems: 'center',
       }}>
        <TextInput
            style={{
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                margin: 10,
                width: "90%",
                borderRadius: 5,
            }}
            placeholder="Add todo"
              onChangeText={setTodo}
              value={todo}
            />

            {/* Button with touchable opacity */}
            <TouchableOpacity
                style={{ 
                    backgroundColor: 'gray',
                    padding: 10,
                    margin: 10,
                    width: '88%',
                    borderRadius: 5,
                    alignItems: 'center',
                }}
                onPress={onSubmitTask}
            >
                <Text style={{ 
                    color: 'white',
                 }}>Add</Text>
            </TouchableOpacity>


      </View>
       
    </View>
  )
}

export default TodoHeader

const styles = StyleSheet.create({})