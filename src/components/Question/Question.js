import { Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RedoIcon from '@mui/icons-material/Redo';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import OverviewQuest from "../OverviewQuest";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setQuestions,
  objQuest,
  setobjQuest
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [identity, setidentity] = useState([]);
  const [visit, setvisit] = useState(['0'])

  const history = useHistory();

  const handleCheck = (i, quest) => {
    setobjQuest([...objQuest, {
      id: parseInt(quest),
      answer: i,
      questcurr: questions[quest]?.question,
      correctans: correct
    }])
    setSelected(i);

    setError(false);

    setidentity([...identity, (currQues).toString()]);
  };

  const handleNext = () => {
    if (currQues > 13) {
      history.push("/result");
    }
    else if (selected) {
      setvisit([...visit, (1 + parseInt(currQues)).toString()])
      setCurrQues(1 + parseInt(currQues));
      setSelected();
    }
    else {
      setvisit([...visit, (1 + parseInt(currQues)).toString()])
      setCurrQues(1 + parseInt(currQues));
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();

    history.push("/");
  };

  return (
    <div className="question">
      <OverviewQuest questions={questions} visit={visit} setvisit={setvisit} setCurrQues={setCurrQues} identity={identity} setSelected={setSelected} />

      <h1>Question {1 + parseInt(currQues)} :</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues]?.question}</h2>
        <div className="options">
          {error && <ErrorMessage>Please select an option first</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption `}
                key={i}
                onClick={() => handleCheck(i, currQues)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            endIcon={<RestartAltIcon />}
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: "200px" }}
            onClick={() => handleQuit()}
          >
            Start Over
          </Button>
          <Button
            endIcon={<RedoIcon />}
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "200px" }}
            onClick={handleNext}
          >
            {currQues > 13 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;