import { useParams } from "react-router";

export default function Search() {
    let params = useParams();
    let search = params.searchTerm;
    return (
        <div>
            <p>Search</p>
            <h2>{search}</h2>
        </div>
    )
}