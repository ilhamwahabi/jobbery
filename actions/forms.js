const actions = store => ({
	changeField({ forms }, type, value) {
		store.setState({ forms: { ...forms, [type]: value } });
	}
});

export default actions;