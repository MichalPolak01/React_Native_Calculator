import React, { useEffect, useState } from "react";
import Calculator from "./src/components/Kalkulator";
import { Dimensions, Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";

const App: () => React$Native = () => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }

    const updateDimensions = () => {
      setWindowWidth(Dimensions.get('window').width);
      setWindowHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  return (
    windowHeight > windowWidth ? (
      <Calculator />
    ) : (
      <Calculator horizontal={true} />
    )
  );
};

export default App;