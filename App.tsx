import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HomeScreen = () => {
  const caloriePercentage = 78; // Percentage of calories consumed

  const calculateArcPath = (percentage: number) => {
    const angle = (percentage / 100) * Math.PI; // Convert percentage to radians
    const x = 100 + 90 * Math.cos(angle - Math.PI / 2); // End x position
    const y = 100 + 90 * Math.sin(angle - Math.PI / 2); // End y position
    const largeArc = percentage > 50 ? 1 : 0;

    return `M10,100 A90,90 0 ${largeArc},1 ${x},${y}`;
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            {/* Profile Image */}
            <Image source={require('./assets/avatar.png')} style={styles.profileImage} />
            <View>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.userName}>Utkarsh Sundkar</Text>
            </View>
          </View>

          {/* Header Icons */}
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Image source={require('./assets/search.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/notification.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Calorie Counter with Semi-Circle Meter */}
        <View style={styles.container2}>
          <View style={styles.calorieCounter}>
            {/* SVG for the semi-circle */}
            <Svg width="200" height="100" viewBox="0 0 200 100">
              {/* Background Arc */}
              <Path d="M10,100 A90,90 0 1,1 190,100" fill="none" stroke="#E0E0E0" strokeWidth="10" />
              {/* Progress Arc */}
              <Path d={calculateArcPath(caloriePercentage)} fill="none" stroke="#FF6347" strokeWidth="10" />
            </Svg>
            <Text style={styles.calorieText1}>1721 Kcal</Text>
            <Text style={styles.subText1}>of 2213 kcal</Text>
          </View>
          <View style={styles.fireIconContainer}>
            <Image
              source={require('./assets/Fire.png')} // Replace with your image path
              style={styles.meterImage}
            />
          </View>
        </View>

        {/* Macronutrients Section */}
        <View style={styles.macroSection}>
          <View style={styles.macroItem}>
            <Text style={styles.macroTitle}>Protein</Text>
            <View style={styles.divider} />
            <Text style={styles.macroValue}>78/90g</Text>
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroTitle}>Fats</Text>
            <View style={styles.divider} />
            <Text style={styles.macroValue}>45/70g</Text>
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroTitle}>Carbs</Text>
            <View style={styles.divider} />
            <Text style={styles.macroValue}>95/99g</Text>
          </View>
        </View>

        {/* Track Your Diet Journey */}
        <Text style={styles.sectionTitle}>  Track your diet journey       </Text>
        <Text style={styles.todayCalories}>    Today Calorie: 1783</Text>

        {/* Meal Section */}
        <View style={styles.mealSection}>
          <TouchableOpacity style={styles.mealCard}>
            <Image source={require('./assets/coffee.png')} style={styles.mealIcon} />
            <View>
              <Text style={styles.mealTitle}>Add Breakfast</Text>
              <Text style={styles.mealSubText}>Recommended 450-650 cal</Text>
            </View>
            <View style={styles.greenCircle}>
              <Image source={require('./assets/plus.png')} style={styles.plusIcon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mealCard}>
            <Image source={require('./assets/lunch.png')} style={styles.mealIcon} />
            <View>
              <Text style={styles.mealTitle}>Add Lunch</Text>
              <Text style={styles.mealSubText}>Recommended 450-650 cal</Text>
            </View>
            <View style={styles.greenCircle}>
              <Image source={require('./assets/plus.png')} style={styles.plusIcon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mealCard}>
            <Image source={require('./assets/lunch.png')} style={styles.mealIcon} />
            <View>
              <Text style={styles.mealTitle}>Add Dinner</Text>
              <Text style={styles.mealSubText}>Recommended 450-650 cal</Text>
            </View>
            <View style={styles.greenCircle}>
              <Image source={require('./assets/plus.png')} style={styles.plusIcon} />
            </View>
          </TouchableOpacity>
        </View>

 {/* Water Section */}
<View style={styles.waterSection}>
  <Text style={styles.waterTitle}>Water</Text>

  {/* Icons for water glasses */}
  <View style={styles.waterIconsContainer}>
    {/* Two same glasses */}
    <Image
      source={require('./assets/glass.png')} // Path to the same glass icon
      style={styles.waterIcon}
    />
    <Image
      source={require('./assets/glass.png')} // Path to the same glass icon
      style={styles.waterIcon}
    />

    {/* Five different glasses */}
    <View style={styles.glassWithPlus}>
      <TouchableOpacity><Image
        source={require('./assets/lightglass.png')} // Path to the glass image
        style={styles.waterIcon}
      />
      <Image
        source={require('./assets/add.png')} // Path to the plus icon
        style={styles.plusIcon1}
      /></TouchableOpacity>
    </View>
    <Image
      source={require('./assets/lightglass.png')} // Path to the second unique glass icon
      style={styles.waterIcon}
    />
    <Image
      source={require('./assets/lightglass.png')} // Path to the third unique glass icon
      style={styles.waterIcon}
    />
    <Image
      source={require('./assets/lightglass.png')} // Path to the fourth unique glass icon
      style={styles.waterIcon}
    />
    <Image
      source={require('./assets/lightglass.png')} // Path to the fifth unique glass icon
      style={styles.waterIcon}
    />
  </View>

  <Text style={styles.waterText}>400ml/4000ml</Text>
</View>

  <View style={styles.activitySection}>
  {/* Top row with icon and activities */}
  <View style={styles.activityRow}>
    <Image source={require('./assets/person.png')} style={styles.activityIcon} />
    <View style={styles.activityTextContainer}>
      <Text style={styles.activityTitle}>Activities</Text>
      <Text style={styles.activitySubText}>2 Activities</Text>
    </View>
    <View style={styles.activityCaloriesContainer}>
      {/* Add the icon */}
      <Image source={require('./assets/Forward.png')} style={styles.iconStyle} />
      {/* Add calories text below the icon */}
      <Text style={styles.activityCalories}>532 Kcal Burnt</Text>
    </View>
  </View>
</View>


        {/* Add padding at bottom to ensure all content is visible above nav bar */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.container1}>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('./assets/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('./assets/meal.png')} style={styles.icon1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <View style={styles.plusButton}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('./assets/stats.png')} style={styles.icon1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('./assets/profile.png')} style={styles.icon2} />
        </TouchableOpacity>
      </View>
    </View>

   
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContainer: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  profileSection: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  welcomeText: { fontSize: 14, color: '#777' },
  userName: { fontSize: 16, fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row' },
  icon: { width: 24, height: 24, marginLeft: 20 },
  calorieCounter: { alignItems: 'center', marginVertical: 16 },
  container2: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  calorieText1: { fontSize: 24, fontWeight: 'bold', color: '#FF6347', marginTop: 8 },
  subText1: { fontSize: 14, color: '#777' },
  fireIconContainer: { position: 'absolute', top: 60, alignItems: 'center' },
  meterImage: { width: 60, height: 60, resizeMode: 'contain' },
  macroSection: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 16 },
  macroItem: { alignItems: 'center' },
  macroTitle: { fontSize: 14, color: '#777' },
  divider: { height: 2, width: '100%', backgroundColor: '#FF6347', marginVertical: 5 },
  macroValue: { fontSize: 16, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  todayCalories: { fontSize: 14, color: '#777', marginBottom: 16 },
  mealSection: { marginBottom: 16 },
  mealCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', borderRadius: 20, padding: 12, marginBottom: 10 },
  mealIcon: { width: 40, height: 40, marginRight: 12 },
  mealTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  mealSubText: { fontSize: 14, color: '#777' },
 
  waterSection: {    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#D6EAF8',
    borderRadius: 12,
    padding: 16,
    marginHorizontal :20,
    width: '90%', },
  waterTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 8,textAlign:'left',  alignSelf: 'flex-start', },
  waterGlasses: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 8 },
  waterIconsContainer: {
    flexDirection: 'row', // Align icons horizontally
    justifyContent: 'space-between', // Space icons evenly
    width: '100%', // Full width
    marginVertical: 10,
  },
 
  
  waterText: { fontSize: 14, color: '#777' },
  activitySection: {  flexDirection: 'row',
    alignItems: 'center', // Aligns all content in the center vertically
    justifyContent: 'space-between', // Space between icon, text, and calories
    backgroundColor: '#ffeae9',
    padding: 40,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,},

  activityIcon: {   width: 30, // Icon size
    height: 40,
    marginRight: 12,  },

    activityTextContainer: {
      flex: 1, // Allow the text container to take up remaining space
      alignItems: 'flex-start', // Align text to the left
      justifyContent: 'center',
    },

  activityTitle: {fontSize: 18, // Larger title font
    fontWeight: 'bold',
    color: '#333',
 },
  activitySubText: { fontSize: 14, // Smaller font for subtext
    color: '#777',
    marginTop:2,
     },
  activityCalories: {  fontSize: 16,
    fontWeight: 'bold',
    color: 'red',},
  container1: { flexDirection: 'row', height: 60, backgroundColor: '#FFFFFF', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#EEEEEE', paddingHorizontal: 10, position: 'absolute', bottom: 0, left: 0, right: 0 },
  tab: { flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' },
  icon1: { width: 24, height: 24, resizeMode: 'contain' },
  icon2: { width: 58, height: 58, resizeMode: 'contain' },
  addButton: { alignItems: 'center', justifyContent: 'center', marginTop: -30 },
  plusButton: { backgroundColor: '#4CAF50', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
  plusText: { color: '#FFFFFF', fontSize: 32, marginTop: -2 },
  
  greenCircle: {
    width: 30,
    height: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position it absolutely
    right: 10, // Adjust the distance from the left
    top: '80%', // Center it vertically
    transform: [{ translateY: -15 }] // Adjust to truly center vertically
  }, 
  plusIcon: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
  waterIcon: {
    width: 40, // Adjust width for each glass
    height: 40, // Adjust height for each glass
    resizeMode: 'contain',
    marginHorizontal: 5, // Space between each icon
  },
  glassWithPlus: {
    position: 'relative', // Allows child elements to be positioned
  justifyContent: 'center', // Center child vertically
  alignItems: 'center', // Center child horizontally
  width: 40, // Match the width of the glass image
  height: 40,

},
plusIcon1: {
  position: 'absolute', // Place the plus icon on top of the glass
  top: 10, // Adjust top position as needed
  right: 5, // Adjust right position as needed
  width: 40, // Adjust the width of the plus icon
  height: 20, // Adjust the height of the plus icon
  resizeMode: 'contain',

},
iconContainer: {
  alignItems: 'center', // Center-align the icon horizontally
  marginTop: 8, // Space between "532 Kcal Burnt" and the icon
},
iconStyle: {
  width: 50,
  height: 50,
marginBottom:12, // Adjust icon size as needed
},
activityRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center', // Aligns text and icon vertically
},activityCaloriesContainer: {
 alignItems:'flex-end',
 justifyContent: 'center',
  
},
});


export default HomeScreen;
