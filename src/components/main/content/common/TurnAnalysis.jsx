import React from 'react';
import DetailsHeader from "./DetailsHeader";
import "./TurnAnalysis.css";

const TurnAnalysis = ({value}) => {
    const analysis = [
        {"label": "2 turns", "action": Math.round(value / 2)},
        {"label": "3 turns", "action": Math.round(value / 3)},
        {"label": "4 turns", "action": Math.round(value / 4)},
        {"label": "5 turns", "action": Math.round(value / 5)},
        {"label": "6 turns", "action": Math.round(value / 6)},
        {"label": "7 turns", "action": Math.round(value / 7)},
        {"label": "8 turns", "action": Math.round(value / 8)},
        {"label": "9 turns", "action": Math.round(value / 9)},
        {"label": "10 turns", "action": Math.round(value / 10)}
    ]

    const items = analysis.map(item => (
        <div key={item.label} className="row item">
            <div className="col-6 label">{item.label}</div>
            <div className="col-6 value">{item.action}</div>
        </div>
    ));

    return (
        <div className='turn-analysis'>
            <DetailsHeader label={"Turn Analysis"} />
            <div className="details-list2-items">
                {items}
            </div>
        </div>
    )
}   

export default TurnAnalysis;
