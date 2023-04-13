import { Navbar } from "./components";
import { style } from "./utils/style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.paddingY}`}>
        <div className="container">
            <Navbar />
        </div>
      </div>
      
    </div>
  );
}

export default App;
