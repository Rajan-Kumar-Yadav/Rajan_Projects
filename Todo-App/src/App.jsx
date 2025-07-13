import "./App.css";

function App() {
  return (
    <center>
      <h1>Todo App</h1>
      <div>
        <input type="text" />
        <input type="text" />
        <button>Add</button>
      </div>
      <div className="todo-item">
        <div>buy milk</div>
        <div>01/01/2002</div>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </center>
  );
}

export default App;
