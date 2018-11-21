export const changeDrawer = (state) => {
	if(state.drawer === null) {
		state.drawer = false;
	} else {
		state.drawer = !state.drawer;
	}
}