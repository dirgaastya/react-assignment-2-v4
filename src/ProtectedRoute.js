import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    //Check URL params for password
    let [searchParams, setSearchParams] = useSearchParams();
    const password = searchParams.get("password");

    return password !== "secret" ? <Navigate to="/unauthorized" replace={true} /> : children; // TODO: replace this
};

export default ProtectedRoute;
