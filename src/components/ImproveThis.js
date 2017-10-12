import React, { Component, PropTypes } from "react";

import Image from "./Image";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

class ImproveThis extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			fullname: props.first_name + ' '+ props.last_name
		};
	}
	
	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	render() {
		return (
			<span>{{ this.state.fullname }}</span>
		);
	}
}

export default ImproveThis;
