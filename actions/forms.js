const actions = store => ({
	changeKeyword({ forms }, keyword) {
		store.setState({ forms: { ...forms, keyword } });
	},

	changeLocation({ forms }, location) {
		store.setState({ forms: { ...forms, location } });
	},

	changeIsFullTime({ forms }, isFullTime) {
		store.setState({ forms: { ...forms, isFullTime } });
	}
});

export default actions;