import React from 'react';
import SideBarMenuComponent from '../components/common/SideBarMenu';
import _ from 'lodash';
import './../App.css';

class HomePageContainer extends React.Component {

	render() {
		let childrentContent = !_.isEmpty(this.props.children) ? this.props.children : '';
		return (
			<div>
				<SideBarMenuComponent 
					children={childrentContent}
				/>
			</div>
		)
	}
}

export default HomePageContainer;

