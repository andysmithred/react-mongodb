import DetailsHeader from "./DetailsHeader";
import "./Quote.css";

const Quote = ({quote}) => {
    return (
        <div className="quote">
            <DetailsHeader label="Quote" />
            <div className="content">
                {quote.text}
            </div>
            <div className="author">
                - {quote.author}
            </div>
        </div>
    )
}

export default Quote;
