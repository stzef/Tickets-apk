import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  ScrollView,  TextInput,  Picker,  Button } from 'react-native';
import { Header, FormInput, Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Ticket extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      origen: '',
      destino: '',
      fecha: '',
      hora: '',
      valor: '',
      pasajero: '',
    };
  }
  render() {
    var valor_props = [
      {label: '$1000', value: 1000 },
      {label: '$2000', value: 2000 },
      {label: '$3000', value: 3000 },
    ];
    var destino_props = [
      {label: 'Opcion A', value: 'A' },
      {label: 'Opcion B', value: 'B' },
      {label: 'Opcion C', value: 'C' },
    ];
    return (
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.title}>Origen</Text>
              <Picker
                style={styles.picker}
                selectedValue={this.state.origen}
                onValueChange={(itemValue, itemIndex) => this.setState({origen: itemValue})}>
                <Picker.Item label="Opcion A" value="A" />
                <Picker.Item label="Opcion B" value="B" />
                <Picker.Item label="Opcion C" value="C" />
              </Picker>
              <Text style={styles.title}>Destino</Text>
              <RadioForm
                radio_props={destino_props}
                initial={1}
                onPress={(value) => {this.setState({destino:value})}}
              />
              <Text style={[styles.title, styles.value]}>Valor</Text>
              <RadioForm
                radio_props={valor_props}
                initial={0}
                onPress={(value) => {this.setState({valor:value})}}
              />
            </View>
            <View style={styles.TextInput}>
              <Text style={[styles.title,styles.space]}>Fecha</Text>
              <DatePicker
                style={{width: 150, marginHorizontal: 10}}
                date={this.state.fecha}
                mode="date"
                placeholder=""
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput:{
                    width: 150
                  }
                  // ... You can check the source to find the other keys. 
                }}
                onDateChange={(date) => {this.setState({fecha: date})}}
              />
              <Text style={[styles.title,styles.space]}>Hora</Text>
              <DatePicker
                style={{width: 150, marginHorizontal: 10}}
                date={this.state.hora}
                mode="time"
                placeholder=""
                format="h:mm:ss a"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput:{
                    width: 150
                  }
                  // ... You can check the source to find the other keys. 
                }}
                onDateChange={(date) => {this.setState({hora: date})}}
              />

            </View>
          </View>
          <Text style={[styles.title,{paddingLeft: 15}]}>Pasajero</Text>
          <FormInput></FormInput>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  content:{
    elevation: 20,
    backgroundColor: '#ffff',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginLeft: 2,
    marginVertical: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#000000'
  },
  form:{
    flex: 1,
    flexWrap: 'wrap', 
    flexDirection: 'row',
  },
  input:{
    flex:1,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'column',
    alignContent: 'center'
  },
  space:{
    marginTop: 15,
  },
  picker:{
    width: 150,
  },
})