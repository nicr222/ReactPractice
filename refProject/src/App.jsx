import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={3} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="You're a pro" targetTime={15} />
      </div>
    </>
  );
}

export default App;
