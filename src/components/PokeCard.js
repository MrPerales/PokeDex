import {View,Text, StyleSheet,Image,TouchableWithoutFeedback} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokeCard({ poke }) {
    console.log(poke.types);
    const pokemonColor=getColorByPokemonType(poke.types.type_1,poke.types.type_2)
    console.log(pokemonColor);
    const bgStyles={backgroundColor:pokemonColor,...styles.bgStyles}

    const gotToPoke=()=>{
        console.log(`vamos al pokemon : ${poke.name}`);
    }
  return (
    <TouchableWithoutFeedback onPress={gotToPoke}>
        <View style={styles.card}>
            <View style={styles.spacing}>

                <LinearGradient 
                    colors={pokemonColor} 
                    start={{x:0,y:0}} 
                    end={{x:1,y:1}} 
                    style={bgStyles}
                >
                    <Text style={styles.number}>#{`${poke.order}`.padStart(3,0)}</Text>
                    <Text style={styles.name}>{poke.name}</Text>
                    <Image source={{uri:poke.image}} style={styles.image}/>
                </LinearGradient>

            </View>

        </View>
    </TouchableWithoutFeedback>
  );
}

const styles=StyleSheet.create({
    card:{
        flex:1,
        height:130,
    },
    spacing:{
        flex:1,
        padding:5,
    },
    bgStyles:{
       flex:1,
       borderRadius:15,
       padding:10

    },
    number:{
        position:'absolute',
        right:10,
        top:10,
        color:'#fff',
        fontSize:11
    },
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:15,
        paddingTop:10,
        textTransform:'capitalize'
    },
    image:{
        position:"absolute",
        bottom:2,
        right:2,
        width:90,
        height:90

    }
})
