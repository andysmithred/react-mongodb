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

    return (
        <div className="container-fluid wonders-dashboard">
            <WonderHeader wonder={wonder} />
            <div className="row mb-5">
                <div className="col-lg-3 mb-5">
                    <WonderDetails wonder={wonder} />
                </div>
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
            </div>
        </div>
    );
};

export default WondersDashboard;
