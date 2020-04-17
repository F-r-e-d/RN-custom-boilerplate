import React, {useState} from 'react';
import Navigation from './Navigation/Navigation';
import  configureStore  from "./Stores/configureStore";
import { Provider } from 'react-redux';
// import { ApplicationProvider } from '@ui-kitten/components';
// import { mapping, dark as darkTheme } from '@eva-design/eva';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import {PersistGate} from 'redux-persist/es/integration/react';


// const fetchFont = () => {
//   return Font.loadAsync({
//     'Acme-Regular': require('./assets/fonts/Acme-Regular.ttf'),
//   });
// }

export default function App() {
    // AsyncStorage.clear()

const [dataLoaded, setDataLoaded] = useState(false)

const { store, persistor } = configureStore()

// if (!dataLoaded) {
//   return(
//     <AppLoading
//       startAsync={fetchFont}
//       onFinish={()=>setDataLoaded(true)}/>
//   )
// }

  return (
    <Provider store={store} >
      {/* <ApplicationProvider mapping={mapping} theme={darkTheme}> */}
      <PersistGate 
      persistor={persistor}>
      <Navigation theme="light" />
      </PersistGate>
      {/* </ApplicationProvider> */}
    </Provider>
  );
}
