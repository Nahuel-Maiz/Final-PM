import React from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const Detail = ({navigation, route}) => {
    //console.log(route.params.name)
    const name = (route.params.name)
    const chef = (route.params.chef)
    const chefImg = (route.params.chefImg)
    const image = (route.params.image)
    const detail = (route.params.detail)
    const skill1 = (route.params.skill1)
    const skill2 = (route.params.skill2)
    const skill3 = (route.params.skill3)
    return(
        <View style={styles.container}>
            <Image style={{ width: '100%', height: '45%'}} source={{uri: image}}></Image>
            <View style={[styles.contenedorView, {paddingTop: 15}]}>
                <Image style={{ width: 45, height: 45, borderRadius: 50, position: 'relative', bottom: -10, left: 5}} source={{uri: chefImg}}/>
                <Text style={{color: '#3E5481', fontWeight: 'bold', fontSize: 17, paddingLeft: 55, position: 'relative', bottom: 20}}>{chef}</Text>
            </View>
            <Text style={{ color: '#D0DBEA'}}>_________________________________________________</Text>
            <Text style={[styles.tittles, {paddingVertical: 10}]}>{name}</Text>
            <Text style={{ color: '#9FA5C0', fontSize: 18, width: '90%',textAlign: 'justify'}}>{detail}</Text>
            <Text style={[styles.tittles, {paddingTop: '2%', paddingBottom: 10}]}>{'Skill'}</Text>
            <Text style={styles.skills}>✔️ {skill1}</Text>
            <Text style={styles.skills}>✔️ {skill2}</Text>
            <Text style={styles.skills}>✔️ {skill3}</Text>
            <View style={styles.contenedorView}>
                <TouchableOpacity style={[styles.inicioButton, {backgroundColor: '#FFC300', top: 55, left:'2%'}]} onPress={() => navigation.navigate('Conferences')}>
                    <Text style= {[styles.textButton, {color: 'white'}]}>Regresar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.inicioButton2, {backgroundColor: '#FF7600', left: '42%'}]} onPress={() => navigation.navigate('Map')}>
                    <Text style= {[styles.textButton, {color: 'white'}]}>Ver en el mapa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        paddingVertical: 30

    },
    inicioButton: {
        width: 130,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    inicioButton2: {
        width: 210,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        position: 'relative',
        bottom: 18
    },
    skills: {
        color: '#2E3E5C', 
        fontSize: 20, 
        width: '90%', 
        textAlign: 'justify', 
        paddingBottom: 10
    },
    tittles: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#3E5481', 
        width: '90%'
    },
    contenedorView: {
        alignContent: 'center', 
        justifyContent: "center", 
        width: '90%', 
        height: 60
    },
    textButton: {
        fontSize: '22', 
        fontWeight: 'bold'
    },
});

export default Detail;

//<Image style={{ width: '100%', height: '45%'}} source={{uri: image}}></Image>