import quizLogo from './assets/quiz-logo.png'
import styled from 'styled-components'

const MainBody = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 10px auto;
  max-width:80vw;
  height: 70vh;
  justify-content: start;
  align-items: center;
  font-family: "Rubik", sans-serif;
`

const Title = styled.h1`
  font-size: 2.1rem;
  background: linear-gradient(30deg, #e781fb 40%, #8e76fa 60%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
`

function App() {
  return (
    <MainBody>
      <img src={quizLogo} className="Quiz Logo w-12 h-12" />
      <Title>Reactquiz</Title>
    </MainBody>
  );
}

export default App;
