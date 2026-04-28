import "./LeadersDetailsList.css";
import LeadersListTile from "./LeadersListTile";
import DetailsHeader from "../../common/DetailsHeader";

const LeadersDetailsList = ({ label, leaders }) => {
    const items = [];

    console.log("LeadersDetailsList: label=", label);
    console.log("LeadersDetailsList: leaders=", leaders);

    leaders.forEach(leaderName => {
      items.push(
        <LeadersListTile key={leaderName} leaderName={leaderName} />
      );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="leaders-details-list-items">
                {items}
            </div>
        </>
    )
}

export default LeadersDetailsList;
