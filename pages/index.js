// import HomePage from 'home/pages/index';
const HomePage = () => <div>HomePage</div>
console.log('homepage', HomePage)
const Home = HomePage;
Home.getInitialProps = HomePage.getInitialProps;
export default Home;
