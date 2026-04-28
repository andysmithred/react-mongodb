import { useDispatch, useSelector } from "react-redux";

import "./LeadersDashboard.css";
import LeaderHeader from "./LeaderHeader";
import { useEffect } from "react";
import { setLeaderDefault } from "../../../../../reducers/leaders/leadersSlice";
import LeaderDetails from "./LeaderDetails";
import Introduction from "../../common/Introduction";
import Attributes from "../../common/Attributes";
import DetailsList from "../../common/DetailsList";
import DetailsList2 from "../../common/DetailsList2";
import LeadersDetailsList from "../list/LeadersDetailsList";
import CivilizationsDetailsList from "../../civilizations/list/CivilizationsDetailsList";


const LeadersDashboard = () => {
    const fetching = useSelector((state) => state.leaders.fetchingItems);
    const items = useSelector((state) => state.leaders.items);
    const leader = useSelector((state) => state.leaders.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fetching && items.length > 0 && !leader) {
            dispatch(setLeaderDefault());
        }
    }, [dispatch, fetching, items, leader]);

    if (fetching) return <div>LOADING...</div>;
    if (!leader) return <div>NO DATA...</div>;

    return (
        <div className="container-fluid leaders-dashboard">
            <LeaderHeader leader={leader} />
            <div className="row mb-5">
                <div className="col-lg-3">
                    <Introduction intro={leader.intro} />
                </div>
                <div className="col-lg-3">
                    <Attributes attributes={leader.attributes} />
                </div>
                <div className="col-lg-3">
                    <DetailsList2 list={leader.ability.attributes} label={leader.ability.name} />
                </div>
                <div className="col-lg-3">
                    <DetailsList2 list={leader.agenda.attributes} label={leader.agenda.name} />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-3 mb-5">
                    <LeaderDetails leader={leader} />
                </div>
                { leader.civilizations && leader.civilizations.historic && leader.civilizations.historic.length > 0 && (
                    <div className="col-lg-3">
                        <CivilizationsDetailsList civilizations={leader.civilizations.historic} label="Historic Civilizations" />
                    </div>
                )}
                { leader.civilizations && leader.civilizations.geographic && leader.civilizations.geographic.length > 0 && (
                    <div className="col-lg-3">
                        <CivilizationsDetailsList civilizations={leader.civilizations.geographic} label="Geographic Civilizations" />
                    </div>
                )}
                { leader.civilizations && leader.civilizations.strategic && leader.civilizations.strategic.length > 0 && (
                    <div className="col-lg-3">
                        <CivilizationsDetailsList civilizations={leader.civilizations.strategic} label="Strategic Civilizations" />
                    </div>
                )}
                <div className="col-lg-3">
                    <DetailsList2 list={leader.momentos} label="Momentos" />
                </div>
            </div>
        </div>
    )
}

export default  LeadersDashboard;
