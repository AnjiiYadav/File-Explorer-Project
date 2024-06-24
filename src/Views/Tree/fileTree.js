import React, { useRef, useState } from "react";
import { AiOutlineFile, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { ActionsWrapper, StyledFile, StyledName } from "./tree.style.js";
import { PlaceholderInput } from "./treePlaceholder.js";
import FILE_ICONS from "./fileIcons";
import { useTreeContext } from "./treeContext.js";

const File = ({ name, id, parent }) => {
  const [isEditing, setEditing] = useState(false);
  const { state, dispatch, isImparative, onNodeClick } = useTreeContext();
  const ext = useRef("");

  let splitted = name && name.split(".");
  ext.current = splitted && splitted[splitted.length - 1];

  return (
    <StyledFile
      onClick={event => {
        event.stopPropagation();
        onNodeClick({
          state,
          name,
          parent,
          type: "file"
        });
      }}
      className="tree__file"
    >
      {isEditing ? (
        <PlaceholderInput
          defaultValue={name}
          type="file"
          style={{ marginLeft: 0 }}
          handleSubmit={name => {
            dispatch({ type: "EDIT_FILE", payload: { id, name } });
            setEditing(false);
          }}
        />
      ) : (
        <ActionsWrapper>
          <StyledName>
            {FILE_ICONS[ext.current] ? (
              FILE_ICONS[ext.current]
            ) : (
              <AiOutlineFile />
            )}
            &nbsp;&nbsp;{name}
          </StyledName>
          {isImparative && (
            <div className="actions">
              <AiOutlineEdit onClick={() => setEditing(!isEditing)} />
              <AiOutlineDelete
                onClick={() => {
                  dispatch({ type: "DELETE_FILE", payload: { id } });
                }}
              />
            </div>
          )}
        </ActionsWrapper>
      )}
    </StyledFile>
  );
};

export { File };
