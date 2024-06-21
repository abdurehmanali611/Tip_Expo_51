import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TabTwoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>About TIP</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Welcome to TIP! We are your trusted experts in repairing home appliances, including washing machines, dryers, dishwashers, and more. With years of experience and a commitment to exceptional service, we strive to ensure your home runs smoothly.
        </Text>
        <Text style={styles.contentText}>
          At TIP, we understand how essential your home appliances are to your daily life. Our team of skilled technicians is dedicated to providing reliable and efficient repairs, so you can get back to your routine with minimal disruption. We take pride in our work and guarantee customer satisfaction with every service call.
        </Text>
        <Text style={styles.contentText}>
          Why choose TIP?
        </Text>
        <Text style={styles.listItem}>
          • Experienced and certified technicians
        </Text>
        <Text style={styles.listItem}>
          • Prompt and reliable service
        </Text>
        <Text style={styles.listItem}>
          • Competitive pricing
        </Text>
        <Text style={styles.listItem}>
          • Comprehensive repair solutions
        </Text>
        <Text style={styles.contentText}>
          Thank you for choosing TIP for your home appliance repair needs. We look forward to serving you and ensuring your home appliances operate at their best.
        </Text>
        <Text style={styles.contentText}>
          Contact us today to schedule a service or to learn more about how we can assist you.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    marginVertical: 15
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  contentContainer: {
    marginBottom: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#555',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
    color: '#555',
    paddingLeft: 10,
  },
});

export default TabTwoScreen;
