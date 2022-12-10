import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score, setScore }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  const handleReturn = () => {
    setScore(0)
    history.push("/");
  }
  return (
    <div className="result">
      <span className="title">Congratulations {name} <br /><br /> Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={() => handleReturn()}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;