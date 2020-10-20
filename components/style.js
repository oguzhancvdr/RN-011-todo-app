import { StyleSheet, Dimensions } from 'react-native';

const color = '#ff9b31';
const main = StyleSheet.create({
  container: {
    backgroundColor: '#303e45',
    flex: 1,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  todoText: {
    fontSize: 35,
    fontWeight: 'bold',
    color,
  },
  todoCount: {
    fontSize: 30,
    fontWeight: 'bold',
    color,
  },
  emptyComponent: {
    color: '#fff',
    // textAlign: 'center',
    // padding:5,
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal:10,
    paddingVertical:5,
  },
});

const todo_input = StyleSheet.create({
  container: {
    backgroundColor: '#a7b6bd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  inputContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#4a636e',
    padding: 10,
    width: Dimensions.get('window').width / 2.5,
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

const todo_card = StyleSheet.create({
  container: {
    backgroundColor: '#a7b6bd',
    padding: 5,
    margin: 5,
    borderRadius: 7,
  },
  text: {
    fontSize: 18,
  },
});

export { todo_input, main, todo_card };
