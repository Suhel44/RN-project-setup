import React, {useRef} from 'react';
import {View} from 'react-native';
import {AppNavigator} from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './store';
import styles from '@app/style/common';
const App = () => {
  const navigationRef = useRef<HTMLElement>();

  function setRef(ref: HTMLElement) {
    if (ref) {
      navigationRef.current = ref;
    }
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View collapsable={false} style={styles.flex}>
          <AppNavigator setRef={setRef} />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
