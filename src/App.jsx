import quizLogo from './assets/quiz-logo.png'
import styled from 'styled-components'
import { LoadingBar } from './loadingBar'
import { useEffect, useState } from 'react'
import { questions } from './data'
const MainBody = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 10px auto;
  max-width: 60vw;
  height: 70vh;
  justify-content: start;
  align-items: center;
  font-family: "Rubik", sans-serif;

  button {
    display: flex;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  background: linear-gradient(30deg, #e781fb 40%, #8e76fa 60%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
`
const QuizBody = styled.div`
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(123, 31, 162, 0.5);
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.6rem;
  color: rgb(236, 223, 223);
  font-size: 1.3rem;
  font-weight: 200;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #3B0A6C;
  border-radius: 0.4rem;
  letter-spacing: 0.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(123, 31, 162, 0.6);
  }

  button {
    cursor: pointer;
    display: block;
    color: #504a4a;
    font-size: 1.1rem;
    font-weight: 300;
    padding: 1rem 15rem;
    border-radius: 3rem;
    background-color: skyblue;
    text-align: center;
    letter-spacing: 0.0rem;

  }

  button:hover{
    background-color: #a92241;
    transition: all 0.3s ease;
    color: black;
  }

  button:focus{
    background-color: #ce1842;
    transition: all 0.3s ease;
    color: black;
  }
`

function App() {
    const [counter, setCounter] = useState(0); //dah el mfrod yzed b3d el timer
    const [currentQuestion, setCurrentQuestion] = useState(questions[counter]);
    const [answers,setAnswers]=useState([]);
    

    function HandleTimer(filled) {
        if (filled) {
            setCounter(prev => {
                const newCounter = prev + 1;
                setCurrentQuestion(questions[newCounter]);
                console.log(answers);
                return newCounter;
            });
            setAnswers((prev) => [...prev, 1]);
            console.log(questions.length===answers.length);
        }
    }



    return (
        questions.length !== answers.length ? (
            <MainBody>
                <img src={quizLogo} className="Quiz Logo w-15 h-15" />
                <Title>Reactquiz</Title>
                <QuizBody>
                    <LoadingBar HandleTimer={HandleTimer} answered={questions.length === answers.length} className='flex justify-center'></LoadingBar>
                    <h1>{currentQuestion.question}</h1>
                    {currentQuestion.answers.map((answer, index) => (
                        <button key={index}>{answer.text}</button>
                    ))}
                </QuizBody>
            </MainBody>
        ) : <MainBody>you on the score page</MainBody>
    );
  }

export default App;
