import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui-next/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
});

class MailField extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<TextField
				id="email"
				name="email"
				floatingLabelText="E-Mail"
				errorText={this.props.error}
				type="email"
				onChange={this.props.onChange}
				value={this.props.value}
				style={{width: '100%'}}
				floatingLabelStyle={{color: '#39454b'}}
				floatingLabelFocusStyle={{color: '#00bcd4'}}
				underlineStyle={{borderColor: '#39454b'}}
				underlineFocusStyle={{borderColor: '#00bcd4'}}
			/>
		);
	}
}

MailField.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailField);
