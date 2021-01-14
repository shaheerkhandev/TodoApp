import React, { Component } from 'react';
import {Alert, Text ,View, Button, TextInput, TouchableOpacity, ScrollView,} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AwesomeAlert from 'react-native-awesome-alerts';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      list: [],
      usertodo: " ",
      showAlert: false,
    };
  }

  onAddItem = () => {
    if(this.state.usertodo === ""){this.openAlert}else if(this.state.usertodo === " "){this.openAlert}else{
    var newStateArray = this.state.list.slice();
    newStateArray.push({id: this.state.list.length + 1,todo: this.state.usertodo,});
    this.setState({list: newStateArray,});
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

  openAlert=()=>{
    this.setState({
      showAlert: true
    });
  }

  closeAlert=()=>{
    this.setState({
      showAlert: false
    });
  }

  handleText=(text)=>{
   this.setState({usertodo: text})
  }
 
  render() {
    const {showAlert} = this.state;
    return (<>
      <Text style={{position: 'relative', top: 10,fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>Todo App</Text>
      <View style={{position: 'relative', top: 30,}}>
      <TextInput placeholder=" Enter Todo..." style={{height: 50}} onChangeText={this.handleText} onSubmitEditing={this.onAddItem}/>
      <Button onPress={this.onAddItem} title="Add" />
      <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Empty Todo"
          message="Please enter text in the textbox."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      <View style={{position: 'relative', top: 20, left: 10,}}>
      <ScrollView style={{ backgroundColor: 'white', marginVertical:20 }} showsVerticalScrollIndicator={true}>
        <View>
          {this.state.list.map(item => (<>
            <View key={item.id}  style={{borderBottomColor: 'black',borderBottomWidth: 5, marginBottom: 20}}>
              <Text style={{fontSize: 22}}>{item.todo} 
              <TouchableOpacity onPress={() => this.onRemoveItem(item.id)}>
              <Icon name="delete" size={30} />
              {/* <Text style={{fontSize: 14}}>Remove</Text> */}
          </TouchableOpacity>
              </Text>
            </View>
          </>))}
        </View>
        </ScrollView>
        </View>
      </View>
    </>);
  }
}
 
export default App;
