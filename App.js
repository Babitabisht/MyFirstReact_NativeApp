import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { red } from "ansi-colors";
import {Blink1} from './components/Blink1';

export default class App extends React.Component {

state={
  blinking:true
}

setInterval=()=>{
  this.setState(previousState=>{
    return{
      blinking : ! previousState.blinking
    }

  }), 1000
}

  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };

    let display= this.state.blinking?this.props.text : '';
    let dis =this.props.text;


    return (
      <View style={styles.container}>
        <Text style={styles.myColor}>
          hello !.................This is my first app
        </Text>
<Blink1 text="I am Blinking from components">  Yeah!!</Blink1>

        <View>
          <Text style={styles.myColor}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            saepe soluta? Aperiam asperiores excepturi minus culpa, iure magnam
            maxime repellat corrupti facilis, eligendi nobis hic, temporibus
            labore! Exercitationem eaque minima ex et sed atque deserunt commodi
            distinctio aperiam tenetur modi, a odio nemo, error iure autem,
            ullam
          </Text>
            <Greeting  name="Babita"></Greeting>
            <Greeting name="Ritik" ></Greeting>
            <Greeting name="Mansi" ></Greeting>

            
          <Text>This is picture</Text>
          <Image source={pic} style={{ width: 193, height: 110 }} />
        </View>
      </View>
    );
  }
}




 class  Greeting extends React.Component{
render(){

  return(
<React.Fragment>
    <Text> Hello !  {this.props.name}</Text>
    <Text>How are You doing , i hope you are doing well... </Text>

    <Text>-------------------------------------------------</Text>
    </React.Fragment>


  );
}

}


// class Blink extends React.Component{
// render(){

//   return(
//     <React.Fragment>
//     <Blink text="Hey there !"></Blink>
//     <Text text="I am Blinker"></Text>
//     <Text style={{color:red}}> I Blinks................  </Text>
//     <Text> {this.props.text} </Text>
//     </React.Fragment>
    
//   );
// }



// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  myColor: {
    backgroundColor: "pink"
  }
});
