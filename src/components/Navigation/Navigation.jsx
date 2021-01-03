import React from 'react';
import Logo from '../Logo/Logo';
import {
	NavContainer,
	Nav,
	SubNavMenu,
	SubNavMenuList,
	SubNavMenuListItem
} from '../../components/Navigation/Style';
import Button from '../Utility/Button';
import { BodyContainer } from '../StyledComponents/StyledComponents';

class Navigation extends React.Component {

	render() {
		const { page } = this.props;

    	return (
			<nav>
				<NavContainer>
					<BodyContainer>
						<Nav>
							{
								this.props.onCaseStudy
									?
								<Button
									route="/"
									text="Back to work"
									left
									color={this.props.color}
								/>
									:
								<Logo color={this.props.logoColor} size="36px" />
							}

							{
								this.props.onCaseStudy
									?
								null
									:
								<SubNavMenu>
									<SubNavMenuList>
										<SubNavMenuListItem active={page === 'work' ? true : false}><a href="/about">Work</a></SubNavMenuListItem>
										<SubNavMenuListItem active={page === 'about' ? true : false}><a href="/about">About</a></SubNavMenuListItem>
										<SubNavMenuListItem active={page === 'contact' ? true : false}><a href="/contact">Contact</a></SubNavMenuListItem>
									</SubNavMenuList>
								</SubNavMenu>
							}
						</Nav>
					</BodyContainer>
				</NavContainer>
			</nav>
    	)
  	}
}

export default Navigation;
