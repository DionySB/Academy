import {imgProduct} from '/images'
import '../App.css'

function App() {
  <div className="App">
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={imgProduct} className="img-perfume" alt="Perfume" />
    </a>
  </div>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </div>
}