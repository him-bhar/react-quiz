import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {QuizProvider} from "./contexts/quiz.jsx";
import Quiz from "./components/Quiz.jsx";

createRoot(document.getElementById('root')).render(
    /*<StrictMode>
        <QuizProvider>
            <Quiz/>
        </QuizProvider>
    </StrictMode>,*/
    // <StrictMode>
        <QuizProvider>
            <Quiz/>
        </QuizProvider>
    // </StrictMode>,
)
