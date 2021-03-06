import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui-next/styles';
import SummaryTable from './summary-table';

const styles = theme => ({
});

class SubmitDialog extends React.Component {
	handleClose = () => {
		this.props.changeState('submit_dialog', false);
	}

	render() {
		const { classes } = this.props;

		const actions = [
			<FlatButton
				name = "ok"
				label = "確定"
				primary = {true}
				onClick = {this.handleClose.bind(this)}
			/>
		];

		return (
			<Dialog
				actions = {actions}
				modal = {false}
				open = {this.props.submit_dialog}
			>
				{this.props.submit_success ?
					( (this.props.attend === 'coming') ?
					'我們收到囉！請跟我們一起期待11月24日（六）中午這一天～' :
					'收到，太可惜了( ･ั﹏･ั)') :
					'送出失敗了！請洽愛名（0912026072）或彥彬（0921998205）由我們手動幫您報名 Q_Q'
				}
			</Dialog>
		)
	}
}

SubmitDialog.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitDialog);
