import { useAppContext } from "../context/appContext";
const JobDescription = ({ icon, text }) => {
	const { toggleJobDescription } = useAppContext();
	return (
		<div>
			<div className="job-description">
				<h4>JOB DESCRIPTION</h4>
				<h5>{text}</h5>
				<button
					type="button"
					className="btn delete-btn"
					onClick={() => toggleJobDescription()}
				>
					Close
				</button>
			</div>
		</div>
	);
};
export default JobDescription;
