import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./BuildingsDashboard.css";
import BuildingHeader from "./BuildingHeader";
import BuildingDetails from "./BuildingDetails";
import Quote from "../../common/Quote";
import DetailsList2 from "../../common/DetailsList2";
import { setBuildingDefault } from "../../../../../reducers/buildings/buildingsSlice";
import Tags from "../../common/Tags";

const BuildingsDashboard = () => {
    const fetching = useSelector((state) => state.buildings.fetchingItems);
    const items = useSelector((state) => state.buildings.items);
    const building = useSelector((state) => state.buildings.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fetching && items.length > 0 && !building) {
            dispatch(setBuildingDefault());
        }
    }, [dispatch, fetching, items, building]);

    if (fetching) return <div>LOADING...</div>;
    if (!building) return <div>NO DATA...</div>;

    return (
        <div className="container-fluid buildings-dashboard">
            <BuildingHeader building={building} />
            <div className="row mb-5">
                <div className="col-lg-3 mb-5">
                    <BuildingDetails building={building} />
                </div>
                {building.yields && building.yields.base && building.yields.base.length > 0 && (
                    <div className="col-lg-3">
                        <DetailsList2 list={building.yields.base} label="Base" />
                    </div>
                )}
                {building.yields && building.yields.adjacency && building.yields.adjacency.length > 0 && (
                    <div className="col-lg-3">
                        <DetailsList2 list={building.yields.adjacency} label="Adjacency" />
                    </div>
                )}
                {building.yields && building.yields.effects && building.yields.effects.length > 0 && (
                    <div className="col-lg-3">
                        <DetailsList2 list={building.yields.effects} label="Effects" />
                    </div>
                )}
                {building.tags && building.tags.length > 0 && (
                    <div className="col-lg-3">
                        <Tags tags={building.tags} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BuildingsDashboard;
