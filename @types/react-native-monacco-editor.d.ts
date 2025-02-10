declare module 'react-native-monacco-editor' {
  import {ComponentType} from 'react';
  import {WebViewProps} from 'react-native-webview';

  export interface MonacoEditorProps extends WebViewProps {
    value: string;
    language?: string;
    theme?: string;
    options?: object;
    onChange?: (value: string) => void;
    onMount?: (editor: any) => void;
  }

  const MonacoEditor: ComponentType<MonacoEditorProps>;
  export default MonacoEditor;
}
