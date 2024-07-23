import Editor from "@monaco-editor/react";
import "./App.css";

function App() {
  const xmlContent = `
<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book>
    <title>Harry Potter and the Philosopher's Stone</title>
    <author>J.K. Rowling</author>
    <genre>Fantasy</genre>
    <published>1997</published>
  </book>
  <book>
    <title>The Hobbit</title>
    <author>J.R.R. Tolkien</author>
    <genre>Fantasy</genre>
    <published>1937</published>
  </book>
  <book>
    <title>1984</title>
    <author>George Orwell</author>
    <genre>Dystopian</genre>
    <published>1949</published>
  </book>
</library>
`;

  return (
    <>
      <Editor height="90vh" defaultLanguage="xml" defaultValue={xmlContent} />;
    </>
  );
}

export default App;
