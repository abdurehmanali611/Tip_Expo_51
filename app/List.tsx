import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const List = () => {

    const lists = [
        {name: 'Plumber', value: 'Plumber'},
        {name: 'Electrician', value: 'Electrician'},
        {name: 'Dish Technician', value: 'Dish Technician'},
        {name: 'Assemblers', value: 'Assemblers'},
        {name: 'Finishing Works', value: 'Finishing Works'},
        {name: 'Injera Maker', value: 'Injera Maker'},
        {name: 'Cloth washer', value: 'Cloth Washer'},
        {name: 'House Cleaner', value: 'House Cleaner'},
        {name: 'Program Coordinator', value: 'Program Coordinator'},
        {name: 'Carpenter', value: 'Carpenter'},
        {name: 'Driver', value: 'Driver'},
        {name: 'Mason', value: 'Mason'}
    ]
  return (
    <View style = {{marginVertical: 35, marginHorizontal: 20, flexDirection: 'column', gap: 20}}>
      <Text style = {{fontSize: 20, fontFamily: 'serif', textAlign: 'center'}}>What type of professional do you need ? </Text>
        <FlatList
        showsVerticalScrollIndicator = {false}
        style = {{marginBottom: 50}}
        data={lists}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => {
            return (
                <TouchableOpacity
                style = {{backgroundColor: `rgba(100,110,100,0.3)`, padding: 10, borderRadius: 20, marginVertical: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text 
                    style = {{fontSize: 20, fontFamily: 'serif', marginVertical: 10}}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }}
        />
    </View>
  )
}

export default List