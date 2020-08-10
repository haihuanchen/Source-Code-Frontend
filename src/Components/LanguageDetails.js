import React from "react";

const LanguageDetails = props => {
  return (
    <div className="ui center aligned header sixteen wide column">
      <h1>{props.language.title}</h1>
      <p>{props.language.description}</p>
      <a href={props.language.resources}> {props.language.resources ? "More Resources" : null}</a><br/>
      <button onClick={() => props.filterPosts(props.language.id)}> See Articles</button>

    </div>
  );
};

// This makes it so, when no course is passed
// CourseDetails will still get a course, but it will be an empty object.
LanguageDetails.defaultProps = {
  language: {
    title: "Select a Language to learn more."
  }
};

export default LanguageDetails;
