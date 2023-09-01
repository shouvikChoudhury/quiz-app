import { Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Result.css";

const Result = ({ name, setName, objQuest, setobjQuest, questions }) => {

  const [resArr, setresArr] = useState([])
  const [score, setscore] = useState(0)

  const history = useHistory();

  useEffect(() => {
    if (!name) {
      setobjQuest([])
      history.push("/");
    }
    else {
      let arr1 = [...new Map(objQuest?.map((item) => [item.id, item]))].map(i => i[1])
      setscore(arr1.filter(item => item.answer === item.correctans).length)

      let arr2 = questions?.filter((item) => objQuest.map(i => i.questcurr).includes(item.question) === false).map(i => {
        return {
          id: questions.findIndex(x => x.question === i.question),
          answer: "",
          questcurr: i.question,
          correctans: i.correct_answer
        }
      })
      setresArr([...arr1, ...arr2].sort((a, b) => a.id - b.id))
    }
  }, [name, history]);

  const handleReturn = () => {

    setobjQuest([])
    setName("")
    history.push("/");
  }

  return (
    <div className="result">
      <span style={{ alignSelf: "center", marginBottom: "20px" }} className="subtitle">{name}, Final Score : {score}</span>

      <div style={{ border: " 5px solid #9c27b0" }}>
        {resArr?.map((item) => {
          return (<div style={{ margin: "10px" }}>
            <p><b>Q-{item.id + 1}. {item.questcurr}</b></p>
            <p style={{ color: "red" }}><b>Your answer: {item.answer}</b></p>
            <p style={{ color: "green" }}><b>Correct answer: {item.correctans}</b></p>
          </div>)
        })
        }
      </div>
      <Button
        endIcon={<ArrowBackIosNewIcon />}
        variant="contained"
        size="large"
        style={{ alignSelf: "center", margin: "15px" }}
        onClick={() => handleReturn()}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default Result;