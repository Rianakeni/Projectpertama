import {
  Image,
  Text, 
  View, 
  ScrollView, 
  TextInput, 
  StyleSheet
} from 'react-native'
import React from 'react';
import Logo from './assets/unklablogo.png';
import Title from './src/components/Title';
import Input from './src/components/Input';

const App = () => {
  return (
    <View>
      <Title text='Welcome To FILKOM UNKLAB'/>
      <ScrollView>
        <Input/>
        <Input placeholder='masukan passoword'/>
        <Input placeholder='masukan email'/>
        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 150, height: 100, backgroundColor: 'blue'}}/>
          <View style={{ backgroundColor: 'yellow', width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={Logo} style={{ width: 70, height: 70 }} />
          </View>
          <View style={{width: 150, height: 100, backgroundColor: 'blue'}}/>
        </View>
        <View>
          <Text style={style.caption1}>Some documentation of Faculty of Computer Science
          </Text>
        </View>
        <View style={style.center}>
          <Image source={require('./assets/fiklogo.png')} style={{ width: 45, height: 45, borderColor: 'black' }} />
          <Text style={style.caption2}>FILKOM di datangi oleh KBP.Dr Albert Sihombing, M.Si., M.A.
          </Text>
        </View>  
        <View style={style.center}>
          <Image source={require('./assets/cssa.jpeg')} style={{width: 360, height:160}}/>
        </View>
        <View style={style.center}>
        <Image source={require('./assets/polisi.jpeg')} style={{width: 360, height:160}}/>
        </View>
        <View style={style.center}>
          <Text style={style.caption2, {marginTop: 20, fontStyle: 'italic', color: 'black'}}>Voice Of Computer Science
          </Text>
        </View>
        <View style={style.center}>
          <Image source={require('./assets/vocs.jpeg')} style={{width: 300, height: 400}}/>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'yellow'
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  caption1: {
    fontSize: 15,
    fontStyle: 'italic', 
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center',
    margin: 10,
  },
  caption2: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
  center:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' , 
    marginBottom: 10
  }
});

export default App;