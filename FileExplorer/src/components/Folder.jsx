import { useState } from "react";

const Folder = ({ folderData, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolderFile = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolderFile = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(folderData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (folderData.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {folderData.name}</span>

          <div>
            <button onClick={(e) => handleNewFolderFile(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleNewFolderFile(e, false)}>
              File +
            </button>
          </div>
        </div>

        <div
          style={{
            display: expand ? "block" : "none",
            marginLeft: "25px",
          }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={onAddFolderFile}
              />
            </div>
          )}
          {folderData.items.map((data) => {
            return (
              <Folder
                folderData={data}
                handleInsertNode={handleInsertNode}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {folderData.name}</span>;
  }
};

export default Folder;
