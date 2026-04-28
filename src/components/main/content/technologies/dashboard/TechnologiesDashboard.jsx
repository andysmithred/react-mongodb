import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./TechnologiesDashboard.css";
import TechnologyHeader from "./TechnologyHeader";
import TechnologyDetails from "./TechnologyDetails";
import DetailsList2 from "../../common/DetailsList2";
import Quote from "../../common/Quote";
import DetailsHeader from "../../common/DetailsHeader";
import { setTechnologyDefault } from "../../../../../reducers/technologies/technologiesSlice";
import TurnAnalysis from "../../common/TurnAnalysis";
import TurnAnalysis2 from "../../common/TurnAnalysis2";
import TechnologyDetailsList from "../list/TechnologyDetailsList";
import WonderDetailsList from "../../wonders/list/WonderDetailsList";
import UnitDetailsList from "../../units/list/UnitDetailsList";
import BuildingDetailsList from "../../buildings/list/BuildingDetailsList";


const TechnologiesDashboard = () => {
    const fetching = useSelector((state) => state.technologies.fetchingItems);
    const items = useSelector((state) => state.technologies.items);
    const technology = useSelector((state) => state.technologies.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fetching && items.length > 0 && !technology) {
            dispatch(setTechnologyDefault());
        }
    }, [dispatch, fetching, items, technology]);

    if (fetching) return <div>LOADING...</div>;
    if (!technology) return <div>NO DATA...</div>;

    return (
        <div className="container-fluid technologies-dashboard">
            <TechnologyHeader technology={technology} />

            <div className="row">
                <div className="col-lg-3 mb-5">
                    <TechnologyDetails technology={technology} />
                    <div>
                        <TurnAnalysis2 value={technology.cost || 0} header="Science Needed" />
                    </div>
                </div>
                <div className="col-lg-9 mb-5">
                    <div className="row mb-5">
                        <div className="col-lg-3">
                            <Quote quote={technology.quote || { text: "--", author: "Unknown" }} />
                        </div>
                        { technology.requires && technology.requires.length > 0 && (
                            <div className="col-lg-3">
                                <TechnologyDetailsList technologies={technology.requires} label="Requires" />
                            </div>
                        )}
                        { technology.leads && technology.leads.length > 0 && (
                            <div className="col-lg-3">
                                <TechnologyDetailsList technologies={technology.leads} label="Leads" />
                            </div>  
                        )}
                    </div>
                    <div className="row mb-5">
                        { technology.unlocks && technology.unlocks.units && technology.unlocks.units.length > 0 && (
                            <div className="col-lg-3">
                                <UnitDetailsList units={technology.unlocks.units} label="Units" />
                            </div>
                        )}
                        { technology.unlocks && technology.unlocks.wonders && technology.unlocks.wonders.length > 0 && (
                            <div className="col-lg-3">
                                <WonderDetailsList wonders={technology.unlocks.wonders} label="Wonders" />
                            </div>
                        )}
                        { technology.unlocks && technology.unlocks.buildings && technology.unlocks.buildings.length > 0 && (
                            <div className="col-lg-3">
                                <BuildingDetailsList buildings={technology.unlocks.buildings} label="Buildings" />
                            </div>
                        )}
                        { technology.unlocks && technology.unlocks.effects && technology.unlocks.effects.length > 0 && (
                            <div className="col-lg-3">
                                <DetailsList2 list={technology.unlocks.effects} label="Effects" />
                            </div>
                        )}
                        { technology.unlocks && technology.unlocks.projects && technology.unlocks.projects.length > 0 && (
                            <div className="col-lg-2">
                                <DetailsList2 list={technology.unlocks.projects} label="Projects" />
                            </div>
                        )}
                        { technology.unlocks && technology.unlocks.actions && technology.unlocks.actions.length > 0 && (
                            <div className="col-lg-2">
                                <DetailsList2 list={technology.unlocks.actions} label="Actions" />
                            </div>
                        )}
                    </div>
                    <div className="row mb-5">
                        { technology.mastery && technology.mastery.effects && technology.mastery.effects.length > 0 && (
                            <div className="col-lg-3">
                                <DetailsList2 list={technology.mastery.effects} label="Mastery Effects" />
                            </div>
                        )}
                        { technology.mastery && technology.mastery.buildings && technology.mastery.buildings.length > 0 && (
                            <div className="col-lg-3">
                                <BuildingDetailsList buildings={technology.mastery.buildings} label="Mastery Buildings" />
                            </div>
                        )}
                        { technology.mastery && technology.mastery.wonders && technology.mastery.wonders.length > 0 && (
                            <div className="col-lg-3">
                                <WonderDetailsList wonders={technology.mastery.wonders} label="Mastery Wonders" />
                            </div>
                        )}
                        { technology.mastery && technology.mastery.actions && technology.mastery.actions.length > 0 && (
                            <div className="col-lg-3">
                                <DetailsList2 list={technology.mastery.actions} label="Mastery Actions" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesDashboard;
