import Header from '../../components/Header/Header'
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Welcome to Sportify</h1>
        <p>
          This is a simple React application that provides a home page with a logo and a heading.
        </p>
      </div>
    </>
  );
}

export default Home;