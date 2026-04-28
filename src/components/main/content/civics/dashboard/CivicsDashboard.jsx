import { useSelector } from "react-redux";
import "./CivicsDashboard.css";
import CivicHeader from "./CivicHeader";
import Cost from "./Cost";
import Age from "./Age";
import Quote from "../../common/Quote";
import DetailsList2 from "../../common/DetailsList2";
import CivicDetails from "./CivicDetails";
import CivicDetailsList from "../list/CivicDetailsList";
import WonderDetailsList from "../../wonders/list/WonderDetailsList";
import UnitDetailsList from "../../units/list/UnitDetailsList";
import BuildingDetailsList from "../../buildings/list/BuildingDetailsList";

const CivicsDashboard = () => {
    const selected = useSelector((state) => state.civics.selected);

    return (
        <div className="container-fluid civics-dashboard">
            <CivicHeader civic={selected} />
            <div className="row mb-5">
                <div className="col-lg-3">
                    <CivicDetails civic={selected} />
                </div>
                <div className="col-lg-2">
                    <Quote quote={selected.quote || { text: "--", author: "Unknown" }} />
                </div>
                {selected.requires && (
                    <div className="col-lg-2">
                        <CivicDetailsList civics={selected.requires} label="Requires" />
                    </div>
                )}
                {selected.leads && (
                    <div className="col-lg-2">
                        <CivicDetailsList civics={selected.leads} label="Leads To" />
                    </div>
                )}
                {selected.unlocks && selected.unlocks.wonders && selected.unlocks.wonders.length > 0 && (
                    <div className="col-lg-2">
                        <WonderDetailsList wonders={selected.unlocks.wonders} label="Unlock Wonders" />
                    </div>
                )}
                {selected.unlocks && selected.unlocks.units && selected.unlocks.units.length > 0 && (
                    <div className="col-lg-2">
                        <UnitDetailsList units={selected.unlocks.units} label="Unlock Units" />
                    </div>
                )}
                {selected.unlocks && selected.unlocks.buildings && selected.unlocks.buildings.length > 0 && (
                    <div className="col-lg-2">
                        <BuildingDetailsList buildings={selected.unlocks.buildings} label="Unlock Buildings" />
                    </div>
                )}
                {selected.unlocks && selected.unlocks.projects && selected.unlocks.projects.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.unlocks.projects} label="Unlock Projects" />
                    </div>
                )}
                {selected.unlocks && selected.unlocks.policies && selected.unlocks.policies.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.unlocks.policies} label="Unlock Policies" />
                    </div>
                )}
                {selected.unlocks && selected.unlocks.endeavors && selected.unlocks.endeavors.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.unlocks.endeavors} label="Unlock Endeavors" />
                    </div>
                )}
                {selected.unlocks && selected.unlocks.effects && selected.unlocks.effects.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.unlocks.effects} label="Unlock Effects" />
                    </div>
                )}
                {selected.mastery && selected.mastery.wonders && selected.mastery.wonders.length > 0 && (
                    <div className="col-lg-2">
                        <WonderDetailsList wonders={selected.mastery.wonders} label="Mastery Wonders" />
                    </div>
                )}
                {selected.mastery && selected.mastery.units && selected.mastery.units.length > 0 && (
                    <div className="col-lg-2">
                        <UnitDetailsList units={selected.mastery.units} label="Mastery Units" />
                    </div>
                )}
                {selected.mastery && selected.mastery.buildings && selected.mastery.buildings.length > 0 && (
                    <div className="col-lg-2">
                        <BuildingDetailsList buildings={selected.mastery.buildings} label="Mastery Buildings" />
                    </div>
                )}
                {selected.mastery && selected.mastery.projects && selected.mastery.projects.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.mastery.projects} label="Mastery Projects" />
                    </div>
                )}
                {selected.mastery && selected.mastery.policies && selected.mastery.policies.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.mastery.policies} label="Mastery Policies" />
                    </div>
                )}
                {selected.mastery && selected.mastery.endeavors && selected.mastery.endeavors.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.mastery.endeavors} label="Mastery Endeavors" />
                    </div>
                )}
                {selected.mastery && selected.mastery.effects && selected.mastery.effects.length > 0 && (
                    <div className="col-lg-2">
                        <DetailsList2 list={selected.mastery.effects} label="Mastery Effects" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CivicsDashboard;
