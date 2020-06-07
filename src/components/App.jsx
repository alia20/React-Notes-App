import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes";
function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((noteItem) => {
        return (
          <Notes
            key={noteItem.key}
            titile={noteItem.titile}
            content={noteItem.content}
          />
        );
      })}
    </div>
  );
}

export default App;
