import * as React from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../../actions/title';
import { RootState, asyncActionState } from '../../types/state';
import { AsyncActionStatus } from '../../types/actions';
import { bindActionCreators, Action, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface Props {
  fullTitle: asyncActionState<string>;
  setTitle: typeof setTitle;
}

interface State {
  titleInput: string
}

type StateProps = Pick<Props, 'fullTitle'>;
type DispatchProps = Pick<Props, 'setTitle'>;

class Home extends React.Component<Props, State> {
  state: State = {
    titleInput: ""
  };

  render() {
    const { fullTitle } = this.props;
    const { titleInput } = this.state;
    return (
      <div className="hero is-primary">
        <div className="hero-body">
          <h1 className="title is-1">{fullTitle.status === AsyncActionStatus.SUCCEEDED && fullTitle.payload}</h1>
        </div>
        <input className="input"
          value={titleInput}
          onChange={this.handleChange}
          name="titleInput"
        />
        <button className="button" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name as keyof State]: e.target.value
    });
  }

  private handleSubmit = () => {
    this.props.setTitle(this.state.titleInput);
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  fullTitle: state.fullTitle
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, any>) => {
	return   {
    setTitle: (title: string) => dispatch(setTitle(title))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
