import React, { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./folderData";
import "./App.css";
import useTransverseTree from "./components/hooks/useTransverseTree";
const App = () => {
  const [explorerData, setExploreData] = useState(explorer);
  const { insertNode } = useTransverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    let finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExploreData(finalTree);
  };

  return (
    <div className="app">
      <Folder folderData={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
};

export default App;
