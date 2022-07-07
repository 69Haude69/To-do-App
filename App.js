import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Keyboard, Platform, KeyboardAvoidingView, TextInput,TouchableOpacity, ScrollView, Alert, Button } from 'react-native';
import Task from './Component/task'

export default function App() {
  const [task,setTask] = useState();
  const [taskItems , setTaskItems] = useState([]);
  const [value , setValue] = useState("");
  
// ... spread operator
  const handleAddTask = () => {
    if (task === "") {
    } else {
      Keyboard.dismiss();
      setTaskItems([...taskItems,task])
      setTask('');
    }
  
}
const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index,1);
  setTaskItems(itemsCopy);
}
  
  return (
    // This is the heading 
    <View style={styles.container}>
    <View style={styles.taskWrapper}>
    <Text style={styles.sectionTitle}>Today's Tasks</Text>
    <ScrollView style={styles.items}>
    {
      // this is where we import task from task.js
    taskItems.map((item ,index)=>{
        return (
          <View >
          <Task text={item} key={index}/>
          <TouchableOpacity style={{position:'absolute',left:320,top:26}} onPress={() => completeTask(index)}>
          <Text style={{color:"grey"}} key={index}>X</Text>
          </TouchableOpacity>
          </View>
        )
      })
    }
    </ScrollView>
    </View>
    {/* this is task input box */}
    <KeyboardAvoidingView  style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder="write a text" value = {task} onChangeText={text => setTask(text)}></TextInput>
      {/* clear text button */}
      <TouchableOpacity style ={styles.clear} onPress={() => setTask("")}>
        <View style={styles.adding}>
        <Text style={{color:'#000308',left:7,top:3,fontSize:17}}>
          X
        </Text>
        </View>
      </TouchableOpacity>

      {/* This is submit button */}
    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
      <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  item:{
    padding:5,
    paddingTop:15,
    borderRadius:10,
    marginBottom:20,
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },
  items: {
    marginTop:30,
    height:'76%'

  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:"center",
  },
  addText:{
    color:'grey',
    fontSize:26
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    top:10,
    right:10
  },
  input:{
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:'white',
  borderRadius:60,
  borderColor:'#C0C0C0',
  borderWidth:1,
  width:250,
  top:10,
  left:10

},
clear:{
  right:40,
  top:10,
},
adding:{
  width:24,
  height:24,
  backgroundColor:'white',
  opacity:0.4,
  borderRadius:5,
  marginRight:15,
}
});

