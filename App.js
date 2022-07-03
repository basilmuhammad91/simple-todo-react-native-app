import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

// import root header
import TodoHeader from './src/components/TodoHeader';

// import todo list
import TodoList from './src/components/TodoList';
import store from './src/redux/store';

export default function App() {

  const RootApp = () => {
    return (
      <View>
        <TodoHeader />
        <TodoList />
      </View>
    );
  };
  
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>

    // <View>
    //   <RootApp />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
