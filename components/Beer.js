import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const Beer = ({ data, navigation }) => {
    const {chef, name, image, time, chefImg, detail, skill1, skill2, skill3} = data
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerBeer}>
                    <Text onPress={() => navigation.navigate('Detail', { name: data.name, chef: data.chef, chefImg: chefImg, image: image, detail: detail, skill1: skill1, skill2: skill2, skill3: skill3})} style={{position: 'relative', bottom: -10}}>
                        <Image style={styles.imageChef} source={{uri: chefImg}}/>
                    </Text>
                    <Text style={styles.textChef} onPress={() => navigation.navigate('Detail', { name: data.name, chef: data.chef, chefImg: chefImg, image: image, detail: detail, skill1: skill1, skill2: skill2, skill3: skill3})}>{chef}</Text>
                </View>
                <Text onPress={() => navigation.navigate('Detail', { name: data.name, chef: data.chef, chefImg: chefImg, image: image, detail: detail, skill1: skill1, skill2: skill2, skill3: skill3})}>
                    <Image style={styles.imageBeer} source={{uri: image}}/>
                </Text>
                <Text onPress={() => navigation.navigate('Detail', { name: data.name, chef: data.chef, chefImg: chefImg, image: image, detail: detail, skill1: skill1, skill2: skill2, skill3: skill3})} style={styles.textName}>{name}</Text>
                <Text style={{color: '#9FA5C0'}}>{time}</Text>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        width: '50%', 
        alignItems: 'center', 
        paddingBottom: 10
    },
    imageChef: {
        width: 40, 
        height: 40, 
        borderRadius: 12
    },
    imageBeer: {
        width: 170, 
        height: 170, 
        borderRadius: 15
    },
    textChef: {
        color: '#2E3E5C', 
        fontWeight: 'bold', 
        fontSize: 16, 
        paddingLeft: 55, 
        position: 'relative', 
        bottom: 20
    },
    containerBeer: {
        alignContent: 'center', 
        justifyContent: "center", 
        width: 170, 
        height: 60
    },
    textName: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#3E5481'
    },
});

export default Beer;

//<Text style={{color: '#2E3E5C', fontWeight: 'bold', fontSize: 16, paddingBottom: 20, paddingLeft: 10}}><Image style={{ width: 40, height: 40, borderRadius: 10}} source={{uri: chefImg}}/>{chef}</Text>

// class Beer extends React.Component {
//     render() {      
//         const{ chef, name, skill, image, time, detail, chefImg, navigation } = this.props.Beer
//         return (
//             <View style={{width: '50%', alignItems: 'center', paddingBottom: 10}}>
//                 <View>
//                     <View style={{alignContent: 'center', justifyContent: "center", width: 170, height: 60}}>
//                         <Image style={{ width: 40, height: 40, borderRadius: 10, position: 'relative', bottom: -10, left: 5}} source={{uri: chefImg}}/>
//                         <Text style={{color: '#2E3E5C', fontWeight: 'bold', fontSize: 16, paddingLeft: 55, position: 'relative', bottom: 20}}>{chef}</Text>
//                     </View>
//                 <Image style={{ width: 170, height: 170, borderRadius: 14}} source={{uri: image}} />
//                 <Text onPress={() => navigation.navigate('Detail')}>
//                     <Text style={{fontSize: 24, fontWeight: 'bold', color: '#3E5481'}} >{name}</Text>
//                 </Text>
//                 <Text style={{color: '#9FA5C0'}}>{time}</Text>
//                 </View>
//             </View>
//         )
//     }
// }