import React from "react";
import AddNotes from "./addNotes";
import DisplayNotes from "../displayCard/displayCard";
import Services from "../../Services/NotesServices";
import "./Notes.scss";

export default function Notes(props) {
  const [notes, setNotes] = React.useState([]);

  console.log("get notes files called");

  const getAllNotes = () => {
    Services.getNotes()
      .then((res) => {
        const { data } = res.data;
        let notes = data.reverse();
        setNotes(notes);
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  };

  React.useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="mainContent">
      <AddNotes getall={getAllNotes} />
      <DisplayNotes notes={notes} getall={getAllNotes} />
      <div></div>
    </div>
  );
}
