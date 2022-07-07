import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'




const task = (props) => {
const [isPressed, setIsPressed] = useState('true');
    const changeColor = () =>{
        setIsPressed(!isPressed);
    }
    

    return (
    <TouchableOpacity onPress={() =>changeColor()} style={[styles.item,{backgroundColor:isPressed?"white":'#ffe4c4'}]}>
    <View>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
item:{
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
},
itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
    top:5
},
square:{
    width:24,
    height:24,
    backgroundColor:'#6495ed',
    opacity:0.4,
    borderRadius:5,
    marginRight:15,
},
itemText:{
    maxWidth:'80%',
},
circular:{
    width:20,
    height:20,
    borderColor:'#6495ed',
    borderWidth:2,
    borderRadius:5,
    left:300,
    bottom:15,
},


})
export default task 