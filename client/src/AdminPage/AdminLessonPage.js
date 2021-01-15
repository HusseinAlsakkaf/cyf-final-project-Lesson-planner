import React from "react";

// import bootstrap css file here
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/Header";
import LessonPage_Info from "./LessonPage_Info";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import VolunteersTable from "./VolunteersTable";

const AdminLessonPage = () => {
  //created to access the state variables  from lessons table
  let lessonId = useLocation().state.id;
  let lesson = useLocation().state.lesson;
  let module = useLocation().state.module;
  let time = useLocation().state.time;
  let date = useLocation().state.date;
  let link = useLocation().state.link;
  let cohort = useLocation().state.cohort;

  return (
    <div className="App">
      <Header />
      <LessonPage_Info
        lessonId={lessonId}
        lesson={lesson}
        module={module}
        time={time}
        date={date}
        link={link}
        cohort={cohort}
      />
      <VolunteersTable lessonId={lessonId} />
      <div className="clear"></div>
      <div className="clear"></div>
      <Footer />
    </div>
  );
};

export default AdminLessonPage;