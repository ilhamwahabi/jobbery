const formActions = store => ({
	changeField({ form }, type, value) {
		store.setState({ form: { ...form, [type]: value } });
	}
});

export default formActions;