import { Intro } from './components/Intro';
import { LastQuestion } from './components/LastQuestions';
import { Questions } from './components/Questions';
import './sass/App.scss';

function App() {
  return (
    <div className="wpapper">
      <div className="overlay"></div>
      <div className="container">
        <Intro />
        <Questions />
        <p className="intro__desc">
          В вашем распоряжении все материалы дела, осталось <span>ОТВЕТИТЬ НА ГЛАВНЫЙ ВОПРОС…</span>{' '}
          Перед тем как это сделать, еще раз проанализируйте мотивы и алиби подозреваемых. Ведь
          нельзя допустить, чтобы невиновный человек был осужден.
        </p>
        <LastQuestion />
      </div>
    </div>
  );
}

export default App;
