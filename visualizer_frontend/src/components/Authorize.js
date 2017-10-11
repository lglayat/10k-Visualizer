import React from 'react'
import { Redirect } from 'react-router-dom'


function Authorize(RenderedComponent, props) {
	return class extends React.Component {
		render() {
			console.log("Rendering from authorize")

			if (localStorage.getItem('jwtToken') && this.props.location.pathname === "/login") {
				console.log("Logged in but on login")
				return (<Redirect to="/homepage" />)
			} else if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== "/login") {
				console.log("Not logged in")
				return (<Redirect to="/login"/>)
			} else {
				console.log("Logged in normal")
				return <RenderedComponent {...this.props} {...props} />
			}

		}
	}
}

export default Authorize
