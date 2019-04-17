import React from 'react';
import Item from './Item.js';


export class Table extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     numRums:0;
        //     numCols:0;
        // };
        //props:
        // dataPoints = what data you want to display in the rows of tableInfo
        // colSpacing = bootstrap column organization

    }

    // for(this.props.numCols){
    //   //iterate through that many dataPoints
    //   <Col colData={this.props.hostDataPoint}/>
    // }

    render() {
        if (!this.props.dataPoints || this.props.dataPoints.length === 0) {
            return <div>OpenSpace listings were not found in this area. Maybe try another?</div>
        }
        const tableInfo = this.props.dataPoints.map((rowPoint, index) =>
            <Item {...rowPoint} />
        );
        return (
            <ul className="list-group">{tableInfo}</ul>
        );

    }


}

export default Table;
