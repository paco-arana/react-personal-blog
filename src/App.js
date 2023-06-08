import './App.css';
import PostTemplate from "./components/PostTemplate";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-b from-[gray] to-[white]`,
  container: `bg-opacity-75 bg-slate-100 w-10/12 m-auto rounded-md shadow-xl p-4 mb-4`,
  heading: `text-xl text-center mb-4`,
  todohead: `text-center mt-4 mb-4`,
  span: `ml-4`,
};

function App() {
  return (
    <div className={style.bg}>
      <header>
        <div className={style.container}>
        <h1>My Personal Blog</h1>
        </div>
      </header>
      <body>
      <PostTemplate />
      </body>
    </div>
  );
}

export default App;
