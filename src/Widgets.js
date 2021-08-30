import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FibreManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleleft">
        <FibreManualRecordIcon />
      </div>
      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("Covid", "3 million deaths")}
      {newsArticle("Bitcoin", "Elon musk😏")}
      {newsArticle("Modi ji", "Vaccine")}
      {newsArticle("ICC TEST", "IND V NZ")}
      {newsArticle("Snake", "Many Girls")}
    </div>
  );
}

export default Widgets;
