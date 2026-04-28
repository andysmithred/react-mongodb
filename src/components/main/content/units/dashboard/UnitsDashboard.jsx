import { useDispatch, useSelector } from "react-redux";

import "./UnitsDashboard.css";
import UnitHeader from "./UnitHeader";
import { useEffect } from "react";
import { setUnitSelected } from "../../../../../reducers/units/unitsSlice";
import UnitDetails from "./UnitDetails";
import UnitsStats from "./UnitStats";
import UnitUnique from "./UnitUnique";
import DetailsList2 from "../../common/DetailsList2";

const UnitsDashboard = () => {
    const fetching = useSelector((state) => state.units.fetchingItems);
    const units = useSelector((state) => state.units.items);
    const unit = useSelector((state) => state.units.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fetching && units.length > 0 && !unit) {
            dispatch(setUnitSelected(units[0]._id));
        }
    }, [dispatch, fetching, units, unit]);

    if (!unit) return <div>NO DATA...</div>;

    return (
        <div className="pt-1 ps-1 units-dashboard">
            <UnitHeader unit={unit} />
            <div className="row">
                <div className="col-lg-3">
                    <UnitDetails unit={unit} />
                </div>
                <div className="col-lg-3">
                    <UnitsStats unit={unit} />
                </div>
                {unit.attributes && unit.attributes.length > 0 && (
                    <div className="col-lg-3">
                        <DetailsList2 list={unit.attributes} label="Attributes" />
                    </div>
                )}
                {unit.abilities && unit.abilities.length > 0 && (
                    <div className="col-lg-3">
                        <DetailsList2 list={unit.abilities} label="Abilities" />
                    </div>
                )}
                {unit.actions && unit.actions.length > 0 && (
                    <div className="col-lg-3">
                        <DetailsList2 list={unit.actions} label="Actions" />
                    </div>
                )}
                { unit.unique && unit.unique.is_unique && (
                    <div className="col-lg-3">
                        <UnitUnique unit={unit} />
                    </div>
                )}
                {unit.unique && unit.unique.bonuses && unit.unique.bonuses.length > 0 && (  
                    <div className="col-lg-3">
                        <DetailsList2 
                            list={unit.unique && unit.unique.bonuses ? unit.unique.bonuses : []} 
                            label="Unique Bonuses" 
                        />
                    </div>
                )}
                {unit.notes && unit.notes.length > 0 && (
                    <div className="col-lg-3">
                        <DetailsList2 list={unit.notes} label="Notes" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default UnitsDashboard;
