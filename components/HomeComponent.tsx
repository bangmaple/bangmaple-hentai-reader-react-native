import {Button, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import tailwind from 'tailwind-rn';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 100,
        height: 90,
    },
});

const BASE = "https://nhentai.net/";
const READ = "https://t.nhentai.net/";
const axios = require('axios').default;
let header = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 5.1; rv:19.0) Gecko/20100101 Firefox/19.0"
});

export default function Home({navigation}) {


    const [doujin, setDoujin] = React.useState<any>({
        id: 0,
        media_id: 0,
        title: {
            english: '',
            japanese: ''
        }
    });


    useEffect(() => {
        const getBook = async () => {
            const res = await axios.get("https://nhentai.net/api/gallery/312455", {
                headers: header
            });
            setDoujin(res.data);
        }
        getBook();
    }, []);
    return (
        <SafeAreaView style={tailwind('flex')}>
            <View style={tailwind('flex p-10')}>
                <View style={tailwind('flex items-center max-w-xs overflow-hidden bg-white rounded-lg')}>
                    <Image style={tailwind('w-full h-56')}
                           source={{uri: 'https://t.nhentai.net/galleries/' + doujin.media_id + '/cover.jpg'}}
                    />
                    <View style={tailwind('py-5 text-center')}>

                        <Text style={tailwind('text-2xl font-bold text-gray-800')}>{doujin.title.japanese}</Text>
                        <Text style={tailwind('text-sm text-gray-700')}>{doujin.title.english}</Text>
                    </View>


                    <Button title={"Go to Details"} onPress={() => navigation.navigate('DishDetail')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}
