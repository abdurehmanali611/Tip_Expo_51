import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image, View, Text, ActivityIndicator, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () =>  {

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      <ActivityIndicator size={40} color={'#2323AD'}/>
    }, 3000);
  })
  return (
    <ScrollView>
    <View style = {{marginVertical: 40, marginHorizontal: 10, flexDirection: 'column', gap: 50}}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style = {{fontSize: 30, width: '65%', textAlign: 'center', height: 50, textAlignVertical: 'center', borderRadius: 30, fontFamily: 'serif'}}>Tip</Text>
        <Image
        source={require('@/assets/images/logo.png')}
        alt = 'logo'
        style = {{width: 80, height: 80, borderRadius: 20}}
        />
      </View>
      <View>
        <Image 
        source={require('@/assets/images/repair.jpg')}
        alt='Repair'
        style = {{width: '100%', height: 300, borderRadius: 30}}
        />
      </View>
      <View style = {{flexDirection: 'column', gap: 30}}>
        <Text style = {{textAlign: 'center', fontSize: 22, fontFamily: 'serif'}}>Our Services</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('List')}
          style = {{width: 150, backgroundColor: `rgba(120,120,120,0.3)`, alignItems: 'center', borderRadius: 20, justifyContent: 'center', height: 200}}>
            <Image 
            source={require('@/assets/images/proffessional.webp')}
            alt='proffessionals nearby'
            style = {{width: 100, height: 100, borderRadius: 20}}
            />
            <Text style = {{fontSize: 16, fontFamily: 'serif', textAlign: 'center'}}>Nearby Proffessional</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {{width: 150, backgroundColor: `rgba(120,120,120,0.3)`, alignItems: 'center', borderRadius: 20, justifyContent: 'center', height: 200}}>
            <Image 
            source={require('@/assets/images/worker.jpg')}
            alt='proffessionals nearby'
            style = {{width: 100, height: 100, borderRadius: 20}}
            />
            <Text style = {{fontSize: 16, fontFamily: 'serif', textAlign: 'center'}}>Proffessionals</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScrollView>
  );
}


export default HomeScreen