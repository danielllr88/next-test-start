import Link from 'next/link';
import Head from 'components/head';
import Navbar from 'components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

const Home = () => (
    <div>
        <Head title="Home" />
        <Navbar />
        <div className="hero">
            <h1 className="title">Proyecto React base con Next.js, Redux y reactstrap (React Bootstrap components)</h1>
            <p className="description">
                <Button color="link" href="https://github.com/zeit/next.js#getting-started">Next.js</Button>
                <Button color="link" href="https://redux.js.org/introduction/getting-started">Redux</Button>
                <Button color="link" href="https://reactstrap.github.io/">reactstrap</Button>
            </p>
        </div>

        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 30px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
    </div>
)

export default Home;