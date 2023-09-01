import { Button, TextField } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = ({ name, setName, fetchQuestions, setQuestions }) => {
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!name) {
      setError(true);
      return;
    } else {
      setError(false);
      setQuestions(fetchQuestions.results)
      history.push("/quiz");
    }
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="settings">
          <span style={{ fontSize: 30 }}>Enter Email to Start</span>
          <div className="settings__select">
            {error && <ErrorMessage>Field cannot be empty</ErrorMessage>}
            <TextField
              type="email"
              style={{ marginBottom: 25 }}
              label="Enter Your Email"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />

            <b>This is a 30 mins Quiz. Once the time ends, it will auto submit.</b>
            <Button
              endIcon={<ArrowForwardIosIcon />}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Start Quiz Here
            </Button>
          </div>
        </div>
        <img src="/quiz.jpg" className="banner" alt="quiz app" />
      </div>
      <Footer />
    </>
  );
};

export default Home;