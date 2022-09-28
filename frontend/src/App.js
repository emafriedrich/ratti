import SearchPlace from "./components/search-place";
import StepForm from "./components/StepForm";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <frameElement>
        <StepForm />
        <SearchPlace></SearchPlace>
      </frameElement>
    </div>
  );
}

export default App;
