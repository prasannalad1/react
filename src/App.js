import React from 'react';
import './App.css';
import{GridList,GridListTile,GridListTileBar, IconButton, ListSubheader} from '@material-ui/core';
import InfoIcon from "@material-ui/icons/Info";
import dataList from './data.json'

function App() {
  return (
    <div className="App">
      <GridList cellHeight={200} cols={3} style={{width:1350,height:600}}>
      <GridListTile
          key="SubHeader"
          cols={3}
          style={{ height: 50, textAlign: "start" }}>
          <ListSubheader component="div"><b>List of Items</b></ListSubheader>
        </GridListTile>
        {dataList.map((data)=>(
          <GridListTile key ={data.id}  >
            <img src={data.image}alt={data.title}/>
            <video src={data.video}alt={data.video}/>
            <GridListTileBar
              title={data.title}
              subtitle={data.description}
              style={{textAlign: 'start'}}
              actionIcon={
                <IconButton>
                  <InfoIcon style={{color: 'white'}}/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}

      </GridList>
    </div>
  );
}

export default App;
