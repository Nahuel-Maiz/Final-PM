import React from "react"
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import Beer from "../components/Beer";
import { auth } from '../firebase';

const pintas = [{chef: 'Chef C. Lewis', name: 'Lager', image: 'https://i.pinimg.com/236x/1f/81/bd/1f81bd51f92e2975f7995a890dd26c1a.jpg', time: 'Mas... • >30 min', detail: 'Son cervezas que usan levadura lager que actúa en la parte baja del fermentador. Requieren en general temperaturas de fermentado bajas y tiempos largos.', chefImg: 'https://i.pinimg.com/236x/a5/8d/b9/a58db9a4169624b25fb5bb7a362e7733.jpg', skill1: 'Atencion rapida.', skill2: 'Buena experiencia asegurada.', skill3: 'Cerveza a buena temperatura.'}, 
                {chef: 'Chef E. Sonas', name: 'Ale', image: 'https://i.pinimg.com/236x/05/ce/01/05ce01c869a24790c440c06249020923.jpg', time: 'Mas... • >20 min', detail: 'Las ale, al revés que las lagers, son de fermentación alta, es decir  que la fermentación se produce en la superficie del fermentador.', chefImg: 'https://i.pinimg.com/236x/9f/1e/fd/9f1efd6d0a5121b3dd67c5c72e7a3fe1.jpg', skill1: 'Sabor unico.', skill2: 'Gran variedad.', skill3: 'Productos excelentes.'}, 
                {chef: 'Chef E. Shelby', name: 'Pale Ale', image: 'https://i.pinimg.com/236x/7b/b7/ad/7bb7ad36ca4f95729e273af798bd056f.jpg', time: 'Mas... • >10 min', detail: 'Toda una familia de cervezas ale de color claro, elaboradas con pequeñas proporciones de malta tostada. Pero que el color no os engañe: suelen ser cervezas con mucho lúpulo y por lo tanto con mucho sabor.', chefImg: 'https://i.pinimg.com/236x/ce/9c/c3/ce9cc3ecda606f9e48216e0aae2646c2.jpg', skill1: 'Buena musica.', skill2: 'Diversion.', skill3: 'Materia prima calificada.'}, 
                {chef: 'Chef J. Cole', name: 'Dark Ales', image: 'https://i.pinimg.com/236x/6f/a9/92/6fa9927b9265d322221dd50bfcd1d0dd.jpg', time: 'Mas... • >15 min', detail: 'Si "pale ale" significa "ale pálida", pues tenía que haber ales oscuras, es decir las dark ales. Se trata de las Stouts y las Porters. Unica en sabor.', chefImg: 'https://i.pinimg.com/236x/ea/a4/c3/eaa4c3eb1eab288ee9fbd838498bff96.jpg', skill1: 'Establecimiendo confortable.', skill2: 'Mejores precios.', skill3: 'Amplia variedad.'}, 
                {chef: 'Chef L. Mason', name: 'Stout', image: 'https://i.pinimg.com/236x/a5/96/b5/a596b5c9745a8f207321c37a2210af90.jpg', time: 'Mas... • >20 min', detail: 'A veces llamada cerveza negra en España. Es una cerveza muy oscura, hecha con una buena proporción de maltas tostadas y caramelizadas además de una buena dósis de lúpulo.', chefImg: 'https://i.pinimg.com/236x/f3/d6/79/f3d679452276a14062960dac46f7dca2.jpg', skill1: 'Buena comunicacion.', skill2: 'Excelente atencion.', skill3: 'Sabores unicos.'}, 
                {chef: 'Chef K. Wody', name: 'Porter', image: 'https://i.pinimg.com/236x/cf/2c/39/cf2c39803556bcaba02d64290abb24ca.jpg', time: 'Mas... • >20 min', detail: 'Son para muchos un tipo más de Stout, pero algo menos oscuras y potentes. Son también cervezas ale con un preciosos color y también muy ricas en lúpulo.', chefImg: 'https://i.pinimg.com/236x/c7/13/4e/c7134e3a94ac2a15509ea0802b52fbe8.jpg', skill1: 'Ambiente climatizado.', skill2: 'Excelentes precios.', skill3: 'Buena musica.'}, 
                {chef: 'Chef D. Mount', name: 'Belgas', image: 'https://i.pinimg.com/236x/32/15/78/321578be5f4ec4ac4264ada33d45cdd6.jpg', time: 'Mas... • >25 min', detail: 'Entre las pálidas y las oscuras. Se trata de cervezas de sabor intenso, con buenas dósis de lúpulo pero con el fondo dulce que le dan las maltas ámbar y crystal.', chefImg: 'https://i.pinimg.com/236x/96/c9/0b/96c90bfae9c8fbdf230fee6fafea2319.jpg', skill1: 'Shows en vivo.', skill2: 'La cerveza mas grande.', skill3: 'Disponible en cualquier horarios.'}, 
                {chef: 'Chef N. Marks', name: 'Barley Wine', image: 'https://i.pinimg.com/236x/91/b7/32/91b73222f7a880911452c578e13b0033.jpg', time: 'Mas... • >50 min', detail: 'Hechas con ingentes cantidades de malta, el resultado inmediato es una cerveza con mucho cuerpo y graduaciones que superan a menudo el 10%.', chefImg: 'https://i.pinimg.com/236x/ba/53/b8/ba53b8e33ce6f3e0f1d2403a330a028c.jpg', skill1: 'Ambiente ideal para disfrutar.', skill2: 'Sabores variados.', skill3: 'Cerveza artesanal.'}, 
                {chef: 'Chef W. Jones', name: 'Bock', image: 'https://i.pinimg.com/236x/0f/f3/59/0ff359ca8fb77f339685f5b00fd71ab8.jpg', time: 'Mas... • >45 min', detail: 'Son cervezas tipo Lager muy ricas en maltas tostadas lo que les confiere un color muy oscuro. Hacen una preciosa espuma blanca que contrasta con el color marrón de la cerveza y que se pegará a tu bigote sin piedad.', chefImg: 'https://i.pinimg.com/236x/b0/61/50/b061505dca713576584c80a9106e652f.jpg', skill1: 'Siempre con stock.', skill2: 'Buen sabor y textura.', skill3: 'Produccion local.'}, 
                {chef: 'Chef C. Alba', name: 'De Trigo', image: 'https://i.pinimg.com/236x/ec/6a/e3/ec6ae3e769e3ef82c60e6aa202e060f6.jpg', time: 'Mas... • >40 min', detail: 'Son toda una categoría en sí, y son especialmente importantes en Alemania. Están hechas total o parcialmente con malta de trigo, son claras de color y de baja graduación.', chefImg: 'https://i.pinimg.com/236x/64/00/de/6400dea41f41e67f12d12c09a3515bd5.jpg', skill1: 'Seguridad.', skill2: 'Distincion por calidad.', skill3: 'Productos tradicionales.'}]

const Conferences = ({navigation}) => {

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Conferencias</Text>
            <FlatList 
                numColumns={2}
                data={pintas} 
                renderItem={( { item } ) => (
                    <Beer navigation={navigation} data={item}/>
            )}>   
            </FlatList>       
            <TouchableOpacity style={styles.outButton} onPress={handleSignOut}>
                <Text style={styles.textButton}>Cerrar Sesion</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        paddingVertical: 70
    },
    tittle: {
        fontSize: 22, 
        fontWeight: 'bold', 
        marginRight: '45%',
        paddingBottom: 20, 
        color: '#3E5481', 
        width: 190
    },
    outButton: {
        width: 160,
        height: 40,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF7600',
        position: 'relative',
        top: 30
    },
    textButton: {
        fontSize: 22,
        color: 'white', 
        fontWeight: 'bold'
    },
});

export default Conferences;