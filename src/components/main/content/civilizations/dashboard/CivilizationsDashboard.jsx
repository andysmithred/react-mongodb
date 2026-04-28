import { useDispatch, useSelector } from "react-redux";

import "./CivilizationsDashboard.css";
import CivilizationHeader from "./CivilizationHeader";
import { useEffect } from "react";
import { setCivilizationSelected } from "../../../../../reducers/civilizations/civilizationsSlice";
import CivilizationDetails from "./CivilizationDetails";
import Introduction from "../../common/Introduction";
import Attributes from "../../common/Attributes";
import DetailsList2 from "../../common/DetailsList2";
import LeadersDetailsList from "../../leaders/list/LeadersDetailsList";
import CivilizationsDetailsList from "../list/CivilizationsDetailsList";

const CivilizationsDashboard = () => {
    const fetching = useSelector((state) => state.civilizations.fetchingItem);
    const civilizations = useSelector((state) => state.civilizations.items);
    const civilization = useSelector((state) => state.civilizations.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fetching && civilizations.length > 0 && !civilization) {
            dispatch(setCivilizationSelected(civilizations[0]._id));
        }
    }, [dispatch, fetching, civilizations, civilization]);

    if (fetching) return <div>LOADING...</div>;
    if (!civilization) return <div>NO DATA...</div>;

    return (
        <div className="container-fluid civilizations-dashboard">
            <CivilizationHeader civilization={civilization} />
            <div className="row mb-5">
                <div className="col-lg-3">
                    <Introduction intro={civilization.intro} />
                </div>
                <div className="col-lg-3 mb-5">
                    <CivilizationDetails civilization={civilization} />
                </div>
                <div className="col-lg-3">
                    <Attributes attributes={civilization.attributes} />
                </div>
                <div className="col-lg-3">
                    { civilization.ability && <DetailsList2 list={civilization.ability.attributes} label={civilization.ability.name} /> }
                </div>
            </div>
            <div className="row mb-5">
                { civilization.leaders && civilization.leaders.historic && civilization.leaders.historic.length > 0 && (
                    <div className="col-lg-3">
                        <LeadersDetailsList leaders={civilization.leaders.historic} label="Historic Leaders" />
                    </div>
                )}
                { civilization.leaders && civilization.leaders.geographic && civilization.leaders.geographic.length > 0 && (
                    <div className="col-lg-3">
                        <LeadersDetailsList leaders={civilization.leaders.geographic} label="Geographic Leaders" />
                    </div>
                )}
                { civilization.leaders && civilization.leaders.strategic && civilization.leaders.strategic.length > 0 && (
                    <div className="col-lg-3 mb-5">
                        <LeadersDetailsList leaders={civilization.leaders.strategic} label="Strategic Leaders" />
                    </div>
                )}
                { civilization.unlocks && civilization.unlocks.requirements && civilization.unlocks.requirements.length > 0 && (
                    <div className="col-lg-3">
                        <CivilizationsDetailsList civilizations={civilization.unlocks.requirements} label="Requirements" />
                    </div>
                )}      
                { civilization.unlocks && civilization.unlocks.unlocks && civilization.unlocks.unlocks.length > 0 && (
                    <div className="col-lg-3">
                        <CivilizationsDetailsList civilizations={civilization.unlocks.unlocks} label="Unlocks" />
                    </div>
                )}  
                { civilization.unlocks && civilization.unlocks.unlocked_by && civilization.unlocks.unlocked_by.length > 0 && (
                    <div className="col-lg-3 mb-5">
                        <DetailsList2 list={civilization.unlocks.unlocked_by} label="Unlocked By" />
                    </div>
                )}
                 { civilization.unique && civilization.unique.infrastructure && civilization.unique.infrastructure.length > 0 && (
                    <div className="col-lg-3 mb-5">
                        <DetailsList2 list={civilization.unique.infrastructure} label="Infrastructure" />
                    </div>
                )}
                 { civilization.unique && civilization.unique.civics && civilization.unique.civics.length > 0 && (
                    <div className="col-lg-3 mb-5">
                        <DetailsList2 list={civilization.unique.civics} label="Civics" />
                    </div>
                )}
                 { civilization.unique && civilization.unique.traditions && civilization.unique.traditions.length > 0 && (
                    <div className="col-lg-3 mb-5">
                        <DetailsList2 list={civilization.unique.traditions} label="Traditions" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default  CivilizationsDashboard;
