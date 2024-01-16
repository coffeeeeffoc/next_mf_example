// import HomePage from 'home/pages/index';
const HomePage = () => <div>HomePage1</div>
console.log('homepage', HomePage)
const Home = HomePage;
Home.getInitialProps = HomePage.getInitialProps;
export default Home;
