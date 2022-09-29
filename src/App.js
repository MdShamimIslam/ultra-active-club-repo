
import './App.css';
import Exercise from './components/Exercise/Exercise';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <footer className="footer">
        <br />
        <h1 className="footer-heading">Questions and Answers</h1>
        <hr />
        <div className="answer-question">
            <h3><span className="ans-part">Q-01:</span> How does React work?</h3>
            <h3><span className="ans-part">Ans:-</span> React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</h3><br />

            <h3><span className="ans-part">Q-02:</span> What is the difference between props and state?</h3>
            <h3><span className="ans-part">Ans:-</span> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h3><br />

            <h3><span className="ans-part">Q-03:</span> What does useEffect do without Load API through fetch?</h3>
            <h3><span className="ans-part">Ans:-</span> I know the conventional way when using hooks is to fetch the data using the useEffect hook. But why can't I just call axios in the functional component instead of a hook and then set the data.</h3>
        </div>
      </footer>
    </div>
   
  );
}

export default App;
