import "./CivicQuote.css";

const CivicQuote = ({quote}) => {
    return (
        <div className="civic-quote">
            <div className="label">
                Quote
            </div>
            <div className="content">
                {quote.text}
            </div>
            <div className="author">
                - {quote.author}
            </div>
        </div>
    )
}

export default CivicQuote;
