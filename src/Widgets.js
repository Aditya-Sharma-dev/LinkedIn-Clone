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
      {newsArticle("Paise", "I dammed")}
      {newsArticle("Paise", "Bitcoin")}
      {newsArticle("Virus", "Covid")}
      {newsArticle("Modi", "Im dammed")}
      {newsArticle("Snake", "Im dammed")}
    </div>
  );
}

export default Widgets;
