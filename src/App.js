import './App.css';
import useFetch from './utils/useFetch';
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Quiz from "./views/Quiz/Quiz";
import Result from "./views/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState("");
  const [objQuest, setobjQuest] = useState([]);

  const { apiData } = useFetch("https://opentdb.com/api.php?amount=15")

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={apiData}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              setQuestions={setQuestions}
              objQuest={objQuest}
              setobjQuest={setobjQuest}
              setName={setName}
            />
          </Route>
          <Route path="/result">
            <Result
              name={name}
              setName={setName}
              objQuest={objQuest}
              setobjQuest={setobjQuest}
              questions={questions}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
