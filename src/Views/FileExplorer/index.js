import React, { useLayoutEffect, useState } from "react";
import Tree from "../Tree/tree";
import { useDispatch, useSelector } from "react-redux";
import { updateAction, updateTreeData } from "../../Redux/slice";

const structure = [
  {
    type: "folder",
    name: "Media",
    files: [
      {
        type: "folder",
        name: "Images",
        files: [
          { type: "file", name: "image1.jpeg" },
          { type: "file", name: "image2.html" },
          { type: "file", name: "Button.style.js" }
        ]
      },
      {
        type: "folder",
        name: "components",
        files: [
          { type: "file", name: "Tree.js" },
          { type: "file", name: "Tree.style.js" }
        ]
      },
      { type: "file", name: "setup.js" },
      { type: "file", name: "setupTests.js" }
    ]
  },
  
];

export default function App() {
  let [data, setData] = useState(structure);
const dispatch = useDispatch();
const dataSelector = useSelector(state=>state.tree.treeData);
  const handleClick = props => {
  };
  const handleUpdate = state => {
    let values = JSON.stringify(state, function(key, value) {
      if (key === "parent" || key === "id") {
        return null;
      }
      return value;
    });
    dispatch(updateTreeData(values));
    
  };

  useLayoutEffect(() => {
    try {
      let savedStructure = JSON.parse(dataSelector);
      if (savedStructure) {
        setData(savedStructure);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />     
    </div>
  );
}
