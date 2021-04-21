import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { CircularProgress } from "@material-ui/core";

class BreadLIst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breads: null,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    this.setState({
      breads: data.message,
    });
  }

  render() {
    const { breads } = this.state;
    return (
      <div className="breads">
        {!!breads ? (
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {Object.keys(breads).map((bread, index) => {
              return (
                <TreeItem key={bread} nodeId={index} label={bread}>
                  {breads[bread].map((subbread) => (
                    <TreeItem
                      key={subbread}
                      nodeId={subbread}
                      label={subbread}
                    />
                  ))}
                </TreeItem>
              );
            })}
          </TreeView>
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }
}

export default BreadLIst;
