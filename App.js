import React, { Component } from 'react';
import {Alert, Text ,View, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Unorderedlist from 'react-native-unordered-list';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      list: [],
      usertodo: " ",
    };
  }

  onAddItem = () => {
    if(this.state.usertodo === ""){this.openTwoButtonAlert}else if(this.state.usertodo === " "){this.openTwoButtonAlert}else{
    var newStateArray = this.state.list.slice();
    newStateArray.push({id: this.state.list.length + 1,todo: this.state.usertodo,});
    this.setState({list: newStateArray});
    }
  }
 
  onRemoveItem = id => {
    this.setState(state => {
      const list = state.list.filter(item => item.id !== id);
 
      return {
        list,
      };
    });
  };

  openTwoButtonAlert=()=>{
    Alert.alert(
      'No input',
      'Please enter a todo first.',
      [
        {text: 'Yes'},
        {text: 'No', style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }

  handleText=(text)=>{
   this.setState({usertodo: text})
  }
 
  render() {
    return (<>
      <Text style={{position: 'relative', top: 10,fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>Todo App</Text>
      <View style={{position: 'relative', top: 30,}}>
      <TextInput placeholder=" Enter Todo..." style={{height: 50}} onChangeText={this.handleText}/>
      <Button onPress={this.onAddItem} title="Add" />
      <View style={{position: 'relative', top: 20, left: 10,}}>
      <ScrollView>
        <Unorderedlist>
          {this.state.list.map(item => (<>
            <Unorderedlist key={item.id} style={{paddingBottom: 20}}>
              <Text style={{fontSize: 22}}>{item.todo} 
              <TouchableOpacity onPress={() => this.onRemoveItem(item.id)}>
              <Icon name="delete" size={30} />
              {/* <Text style={{fontSize: 14}}>Remove</Text> */}
          </TouchableOpacity>
              </Text>
            </Unorderedlist>
          </>))}
        </Unorderedlist>
        </ScrollView>
        </View>
      </View>
    </>);
  }
}
 
export default App;