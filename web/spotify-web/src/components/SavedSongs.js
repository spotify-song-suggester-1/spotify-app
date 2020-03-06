// import React from "react";
// import {connect } from "react-redux";
// import { updateTitle } from "../actions/index2";

// function SavedSongs(props) {
//     const [newTitleText, setNewTitleText] = React.useState();
//     const [isEditing, setIsEditing] = React.useState(false);
  
//     const handleChanges = e => {
//       setNewTitleText(e.target.value);
//     };
  
//     const handleUpdateTitle = e => {
//       e.preventDefault();
//       props.updateTitle(newTitleText);
//       setIsEditing(false);
//     };
      

//     return (
//         <div>
//           {!isEditing ? (
//             <h1>
//               {props.titleOnProps}{" "}
//               <i className="far fa-edit" onClick={() => setIsEditing(!isEditing)} />
//             </h1>
//           ) : (
//             <div>
//               <input
//                 className="title-input"
//                 type="text"
//                 name="newTitleText"
//                 value={newTitleText}
//                 onChange={handleChanges}
//                 required
//               />
//               <button onClick={handleUpdateTitle}>Update title</button>
//             </div>
//           )}
//         </div>
//       );
//     };
    
//     const mapStateToProps = state => {
//       return {
//         titleOnProps: state.title
//       };
//     };
    
//     export default connect(
//       mapStateToProps,
//       {
//         updateTitle
//       }
//     )(SavedSongs);
