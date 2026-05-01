import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./WondersDashboard.css";
import WonderHeader from "./WonderHeader";
import WonderDetails from "./WonderDetails";
import Quote from "../../common/Quote";
import DetailsList2 from "../../common/DetailsList2";
import { setWonderDefault } from "../../../../../reducers/wonders/wondersSlice";
import TechnologyDetailsList from "../../technologies/list/TechnologyDetailsList";
import RequiresDetailsList from "../../common/RequiresDetailsList";
import TurnAnalysis2 from "../../common/TurnAnalysis2";
import Tags from "../../common/Tags";

const WondersDashboard = () => {
    const fetching = useSelector((state) => state.wonders.fetchingItems);
    const items = useSelector((state) => state.wonders.items);
    const wonder = useSelector((state) => state.wonders.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fetching && items.length > 0 && !wonder) {
            dispatch(setWonderDefault());
        }
    }, [dispatch, fetching, items, wonder]);

    if (fetching) return <div>LOADING...</div>;
    if (!wonder) return <div>NO DATA...</div>;

    console.log("WONDER TAGS: ", wonder.tags);

    return (
        <div className="container-fluid wonders-dashboard">
            <WonderHeader wonder={wonder} />
            <div className="row mb-5">
                <div className="col-lg-2 mb-5">
                    <WonderDetails wonder={wonder} />
                    <TurnAnalysis2 value={wonder.cost || 0} header="Production / Turn" />
                </div>
                <div className="col-lg-10 mb-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <Quote quote={wonder.quote || { text: "--", author: "Unknown" }} />
                        </div>
                        {wonder.requires && wonder.requires.length > 0 && (
                            <div className="col-lg-3">
                                <RequiresDetailsList requirements={wonder.requires} label="Requires" />
                            </div>
                        )}
                        {wonder.effects && wonder.effects.length > 0 && (
                            <div className="col-lg-3">
                                <DetailsList2 list={wonder.effects} label="Effects" />
                            </div>
                        )}
                        {wonder.tags && wonder.tags.length > 0 && (
                            <div className="col-lg-3">
                                <Tags tags={wonder.tags} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WondersDashboard;
