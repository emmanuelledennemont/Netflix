import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./assets/program.json";

function App() {


  return (
    <>
      <Header title="Netflix" />
      
   
      {data.map((element) => {
        // console.log(element);
        return (
          <Section 
            key={element.id}
            title={element.category}
            urlList={element.images}
          />
        );
      })}
    </>
  );
}

export default App;
