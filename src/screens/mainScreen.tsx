import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import CodeEditor from 'react-native-monacco-editor';

const MainScreen: React.FC = () => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.editorContainer, {width, height}]}>
        <CodeEditor
          value="// Start coding here"
          language="javascript"
          theme="vs-dark"
          style={[styles.editor, {width, height}]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editorContainer: {
    flex: 1,
  },
  editor: {
    flex: 1,
  },
});

export default MainScreen;
