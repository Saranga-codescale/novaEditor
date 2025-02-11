import React, {useRef, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const MainScreen = () => {
  const webViewRef = useRef<WebView>(null);

  // Send initial value to the editor
  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.postMessage(
        JSON.stringify({type: 'setValue', payload: '// Start coding here'}),
      );
    }
  }, []);

  // Handle messages from the WebView
  const handleMessage = (event: {nativeEvent: {data: string}}) => {
    const {type, payload} = JSON.parse(event.nativeEvent.data);
    if (type === 'getValue') {
      console.log('Editor value:', payload);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        source={require('./monaco.html')}
        onMessage={handleMessage}
        style={styles.editor}
        originWhitelist={['*']}
        javaScriptEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editor: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default MainScreen;
