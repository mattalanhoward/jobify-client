import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register, ProtectedRoute } from "./pages";
import {
	AddJob,
	AllJobs,
	Profile,
	SharedLayout,
	Stats,
} from "./pages/dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path="all-jobs" element={<AllJobs />} />
					<Route path="add-job" element={<AddJob />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="register" element={<Register />}></Route>
				<Route path="/landing" element={<Landing />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
