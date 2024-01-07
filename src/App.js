import Header from "./components/header/Header"
import Lesson from "./pages/Lesson"
import {data} from "./helper/data"
import LessonCard from "./components/lesson/LessonCard";


function App() {
  return (
    <>
       <Header />
       <Lesson data={data}/>
    
    </>
  );
}

export default App;
