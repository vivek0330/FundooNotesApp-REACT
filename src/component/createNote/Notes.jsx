import React from "react";
import AddNotes from "./addNotes";
import DisplayNotes from "../displayCard/displayCard";
import Services from "../../Services/NotesServices";
import "./Notes.scss";

export default function Notes(props) {
  const [notes, setNotes] = React.useState([]);

  const getAllNotes = () => {
    Services.getNotes()
      .then((res) => {
        const { data } = res.data;
        console.log("res :: " + res);
        //console.log("getnotes", arrayData)
        let notes = data.reverse();
        console.log("get all note :: ", notes);
        setNotes(notes);
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  };

  // React.useEffect(() => {
  //   getAllNotes();
  // }, []);

  return (
    <div className="mainContent">
      <AddNotes getall={getAllNotes} />
      <DisplayNotes notes={notes} getall={getAllNotes} />
      <div></div>
    </div>
  );
}