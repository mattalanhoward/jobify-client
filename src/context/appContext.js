import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: "",
	alertType: "",
	user: user ? JSON.parse(user) : null,
	token: token,
	userLocation: userLocation || "",
	jobLocation: userLocation || "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	const addUserToLocalStorage = ({ user, token, location }) => {
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("token", token);
		localStorage.setItem("location", location);
	};

	const removeUserFromLocalStorage = ({ user, token, location }) => {
		localStorage.removeItem("");
		localStorage.removeItem("");
		localStorage.removeItem("");
	};

	const registerUser = async (currentUser) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		try {
			const response = await axios.post("/api/v1/auth/register", currentUser);
			// console.log(`,response`, response);
			const { user, token, location } = response.data;
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: { user, token, location },
			});
			addUserToLocalStorage({ user, token, location });
		} catch (error) {
			// console.log(error.response);
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const loginUser = async (currentUser) => {
		console.log(`login current user`, currentUser);
		dispatch({ type: LOGIN_USER_BEGIN });
		try {
			const { data } = await axios.post("/api/v1/auth/login", currentUser);
			const { user, token, location } = data;
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: { user, token, location },
			});
			addUserToLocalStorage({ user, token, location });
		} catch (error) {
			dispatch({
				type: LOGIN_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	return (
		<AppContext.Provider
			value={{ ...state, displayAlert, clearAlert, registerUser, loginUser }}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
