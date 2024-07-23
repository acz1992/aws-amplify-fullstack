import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
/* import '@aws-amplify/ui-react/styles.css'; */
import {
	withAuthenticator,
	Button,
	Heading,
	Image,
	View,
	Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
	return (
		<View className="App">
			<Card>
				<Image src={logo} className="App-logo" alt="logo" />
				<Heading level={1}>We now have Auth</Heading>
			</Card>
			<Button onClick={signOut}>Sign Out</Button>
		</View>
	);
}

// Wrap App in higher order component, so when user navigates to index URL, redirects to login page
export default withAuthenticator(App);
