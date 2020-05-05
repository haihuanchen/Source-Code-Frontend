import React from "react";

const LanguagesContainer = props => {
  return (
    <div >
      <select
        onChange={(event) => props.handleChange(event)}
        defaultValue="select">
        <option value="select" disabled>
          Select a Language
        </option>
        {props.languages.map(language => {
          return (
            <option key={language.id}  value={language.id}>
              {language.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};


LanguagesContainer.defaultProps = {
  languages: []
};

export default LanguagesContainer;
