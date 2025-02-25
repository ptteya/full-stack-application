import { useContext } from "react";
import { DocumentContext } from "../contexts/DocumentContext";
import { Link } from "react-router-dom";

const Home = () => {
    const {documents} = useContext(DocumentContext);

    return (
        <>
        <nav>
        <ul>
            <li><Link to={'/create'}>Create</Link></li>
        </ul>
        </nav>

        <div>
            {documents?.map(doc => 
            <div key={doc._id} className="document">
                <p>{doc.title}</p>
                <p>{doc.description}</p>
                <button><Link to={`/details/${doc._id}`}>Details</Link></button>
            </div>
            )}
        </div>
        </>
    );
};

export default Home;