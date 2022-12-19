import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { user } = useAppContext();

	if (!user) {
		return <Navigate to="/landing" />;
	}

	if (user) {
		return children;
	}

	// return <useAppContext> {user}</useAppContext>;
};
export default ProtectedRoute;
