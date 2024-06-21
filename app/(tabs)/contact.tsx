import { TextInput, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Mail from 'expo-mail-composer'
import * as ImagePicker from 'expo-image-picker'

interface FormState {
  name: string;
  title: string;
  message: string;
}

const contact = () => {

  const [form, setForm] = useState<FormState>({
    name: '',
    title: '',
    message: '',
  });
  const [image, setImage] = useState(require('@/assets/images/repair.jpg'))
  const [emailAvailable, setEmailAvailable] = useState(false)

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    const permission = async () => {
      const isAvailable = await Mail.isAvailableAsync()
      setEmailAvailable(isAvailable)
    }

    permission()
  })

  const handleSubmit = () => {

    if (form.name == '' || form.title == '' || form.message == '') {
      alert('Please fill in all the fields')
      return;
    }
    
    emailAvailable && (
      Mail.composeAsync({
        recipients: ['abdurehmanali611@gmail.com'],
        subject: form.title,
        body: `I want to say ${form.message} and you can see the following image to illustrate what happened ${image}`,
      })
    )

    setForm({
      name: '',
      title: '',
      message: '',
    })
    setImage(require('@/assets/images/repair.jpg'))
  }

  const handleImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permission.granted === false) {
      alert('You haven\'t granted media library permissions')
    }

    let galleryselect = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
      allowsEditing: true
    })

    if (!galleryselect.canceled) {
        setImage(galleryselect.assets)
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style = {{marginVertical: 10}}
    >
      <View style={{ padding: 10, borderRadius: 30, flexDirection: 'column', gap: 30, marginHorizontal: 10, marginTop: '20%' }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'serif' }}>contact</Text>
        <View style={{ flexDirection: 'column', gap: 20 }}>
          <Text style={{ fontSize: 19, fontFamily: 'serif', color: '#2323AB' }}>Full Name:</Text>
          <TextInput
            placeholder='Full Name'
            textContentType='givenName'
            value={form.name}
            style={{ paddingHorizontal: 10, width: '100%', height: 50, backgroundColor: `rgba(120,100,110,0.3)`, borderRadius: 30 }}
            onChangeText={(text: string) => handleChange('name', text)} // Add onChangeText prop with type annotation
          />
        </View>
        <View style={{ flexDirection: 'column', gap: 20 }}>
          <Text style={{ fontSize: 19, fontFamily: 'serif', color: '#2323AB' }}>upload photo if there:</Text>
          <TouchableOpacity
          onPress={handleImage}
          >
          <Image 
          source={image}
          alt='part to be repaired'
          style = {{width: 80, height: 80, borderRadius: 20, alignSelf: 'center'}}
          />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column', gap: 20 }}>
          <Text style={{ fontSize: 19, fontFamily: 'serif', color: '#2323AB' }}>Title: </Text>
          <TextInput
            placeholder='your Title'
            value={form.title}
            style={{ paddingHorizontal: 10, width: '100%', height: 50, backgroundColor: `rgba(120,100,110,0.3)`, borderRadius: 30 }}
            onChangeText={(text: string) => handleChange('title', text)} // Add onChangeText prop with type annotation
          />
        </View>
        <View style={{ flexDirection: 'column', gap: 20 }}>
          <Text style={{ fontSize: 19, fontFamily: 'serif', color: '#2323AB' }}>Message: </Text>
          <TextInput
            placeholder="your Message"
            value={form.message}
            maxLength={1000}
            multiline={true}
            numberOfLines={5}
            style={{ width: '100%', height: 100, backgroundColor: `rgba(120,100,110,0.3)`, borderRadius: 30, padding: 10 }}
            onChangeText={(text: string) => handleChange('message', text)} // Add onChangeText prop with type annotation
          />
        </View>
      </View>
      <TouchableOpacity 
      onPress={handleSubmit}
      style={{ backgroundColor: `rgba(100,120,100,0.9)`, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 200, alignSelf: 'center', marginVertical: 10 }}>
        <Text style = {{fontFamily: 'serif', color: '#000000', fontSize: 18}}>Send Message</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default contact;