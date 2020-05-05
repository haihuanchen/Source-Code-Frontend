import React from "react";

const LanguagesContainer = props => {
  return (
    <div >
      <select
        onChange={(event) => props.handleChange(event)}
        defaultValue="select"
      >
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





















// import React from "react";

// const  LanguagesContainer = props => {
//   // console.log("test2", props.courses)
//   return (
//     <div>
//         <lable>
//         <select
//             onChange={(event) => props.handleChange(event)}
//             defaultValue="select" 
//             >
//             <option value="select" disabled>
//                 pick a language
//             </option>
//             </select>

//         </lable>
     
//         {props.languages.map(language => {
//           return (
//             <option key={language.id}  value={language.id}>
//               {language.title}
//             </option>
//           );
//         })}
      
//     </div>
//   );
// };

// // This makes it so, when no courses are passed
// // CourseDetails will still get courses, but it will be an empty array.
// LanguagesContainer.defaultProps = {
//     languages: []
// };

// export default LanguagesContainer;






























// import React, { Fragment } from 'react'

// const LanguagesContainer = props => {
//         return(
//             <div>
//                 <lable>
//                 <select
//                 onChange={(event) => this.props.handleChange(event)}
//                 defaultValue="select a language" 
//                 >
//                  <option value="select" disabled>
//                      Pick a Language
//                  </option>
//                 </select>
//                 </lable>
//                 {this.props.languages.map(language => {
//                     return <option key={language.id} value={language.id} >
//                          {language.title}
                       
//                             </option>
//                 })}
//             </div>
//         )
//     }

// export default LanguagesContainer








// render(){
//     // console.log("test2", this.state.targetedLang)
//     return(
//         <Fragment>
//             <label>
//             Pick your language:
//             <select
//                     onChange={(event) => props.handleChange(event)}
//                     defaultValue="select a language" 

//                     >
//                 <option value="JavaScript" >JavaScript</option>
//                 <option value="Ruby">Ruby</option>
//             </select>
//             </label>
//             {this.props.languages.map(language => {
//                 return <Fragment key={language.id}>
//                         <h1 value={language.id} onClick={()=>this.props.filterPosts(language.id)}> {language.title}</h1><br/>
//                         <p> {language.description}</p>
//                         <p>More Resourses: {language.resources}</p>
//                     </Fragment>
//             })}
//         </Fragment>
//     )
// }