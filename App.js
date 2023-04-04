import { useCallback } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/telas/Cesta';

import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }
  
  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}