

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App= ()  => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  flex:1
  };

  return (
   
        <View 
        style={backgroundStyle}>
       <Text style={styles.sectionTitle}>App de quemados{''}
<Text style={styles.sectionTitleBold}>UAM

</Text>
       </Text>
       <Button title='Nuevo usuario'>

       </Button>
        </View>
     
  );
};

const styles = StyleSheet.create({
sectionTitle:{
  fontSize:24,
  fontWeight:'600',
  textAlign: 'center',
  textTransform:'uppercase',
  fontSize:30,
  color:'#374151',
  fontWeight:'600',
},
sectionTitleBold:{
  fontWeight:'900',
  color:'#6D28D9',
},
highligh:{
  fontWeight:'700'
}
});

export default App;
