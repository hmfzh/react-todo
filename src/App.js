import "./styles.css";

export default function App() {
  return (
    <div class="container">
      <div class="frame">
        <section class="header">
          <button class="header-btn main-black-color">ADD</button>
          <h1 class="header-title">Todo list</h1>
          <button class="header-btn main-read-color">Claer</button>
        </section>

        <section class="add">
          <form class="add-form">
            <input type="text" class="add-input" />
            <button class="add-btn">ADD</button>
          </form>
        </section>

        <section class="todos">
          <div class="todo">
            <span class="todos-text">Learning React</span>
          </div>
          <div class="todo">
            <span class="todos-text">Learning React</span>
          </div>
          <div class="todo">
            <span class="todos-text">Learning React</span>
          </div>
          <div class="todo">
            <span class="todos-text">Learning React</span>
          </div>
          <div class="todo">
            <span class="todos-text">Learning React</span>
          </div>
          <div class="todo">
            <span class="todos-text">Learning React</span>
          </div>
          <div class="todo">
            <span class="todos-text">Learning React</span>
          </div>
        </section>
      </div>
    </div>
  );
}
