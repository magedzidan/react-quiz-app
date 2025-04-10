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
  height: 80vh;
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
  padding: 2.5rem;
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
    background-color: #ce1842;
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
    const [counter, setCounter] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[counter]);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [speedUp,SetSpeedUp]=useState(false); 
    function HandleTimer(filled) {
        if (filled) {
          SetSpeedUp(false);

            if (answers.length < counter + 1) {
                HandleAnswer({ text: 'No answer selected', isCorrect: false });
                SetSpeedUp(false);

            }
            
            setCounter(prev => {
                const newCounter = prev + 1;
                setCurrentQuestion(questions[newCounter]);
                return newCounter;
            });
        }
    }

    function HandleAnswer(answer=' ') {
      setAnswers((prev) => [...prev, answer]);
      SetSpeedUp(true);
        if (answer.isCorrect) {
            setScore(prev => prev + 1);
        }
        
    }
    console.log(answers,answers.length)
    return (
        questions.length !== answers.length ? (
            <MainBody>
                <img src={quizLogo} className="Quiz Logo w-15 h-15" />
                <Title>Reactquiz</Title>
                <QuizBody>
                    <LoadingBar HandleTimer={HandleTimer} answered={questions.length === answers.length} className='flex justify-center' speed={speedUp}></LoadingBar>
                    <h1>{currentQuestion.question}</h1>
                    {currentQuestion.answers.map((answer, index) => (
                        <button 
                            disabled={answers.length > counter} 
                            onClick={() => HandleAnswer(answer)} 
                            key={index}
                            tabIndex={0}
                            style={{
                                opacity: answers.length > counter ? 0.5 : 1,
                                cursor: answers.length > counter ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {answer.text}
                        </button>
                    ))}
                </QuizBody>
            </MainBody>
        ) : (
            <MainBody>
                <Title>Quiz Complete!</Title>
                <QuizBody className='pt-0'>
                    <h2>Your Score: {score} out of {questions.length}</h2>
                    {answers.map((answer, index) => (
                        <div key={index}>
                            <h1>{questions[index].question}</h1>
                            {answer.isCorrect ? 
                                <h3 className="text-green-700">{answer.text}</h3> : 
                                <h3 className="text-red-700">{answer.text}</h3>
                            }
                        </div>
                    ))}
                </QuizBody>
            </MainBody>
        )
    );
}

export default App;
