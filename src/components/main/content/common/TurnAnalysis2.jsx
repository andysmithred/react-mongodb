import React from 'react';
import DetailsHeader from "./DetailsHeader";
import "./TurnAnalysis2.css";

const TurnAnalysis = ({value, header}) => {
    const analysis = [
        {"label": "2", "action": Math.round(value / 2)},
        {"label": "3", "action": Math.round(value / 3)},
        {"label": "4", "action": Math.round(value / 4)},
        {"label": "5", "action": Math.round(value / 5)},
        {"label": "6", "action": Math.round(value / 6)},
        {"label": "7", "action": Math.round(value / 7)},
        {"label": "8", "action": Math.round(value / 8)},
        {"label": "9", "action": Math.round(value / 9)},
        {"label": "10", "action": Math.round(value / 10)}
    ]

    const items = analysis.map(item => (
        <div key={item.label} className="item">
            <div className="label">{item.label}</div>
            <div className="value">{item.action}</div>
        </div>
    ));

    return (
        <div className="turn-analysis2">
            <DetailsHeader label={header || "Turn Analysis"} />
            <div className="items">
                {items}
            </div>
        </div>
    )
}   

export default TurnAnalysis;
