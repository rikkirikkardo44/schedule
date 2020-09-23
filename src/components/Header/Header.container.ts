import { connect } from 'react-redux';
import { changeMentorStatus } from '../../actions';
import { setShowModalSettings, StateModel } from '../../reducers';
import { Header } from './Header';

const mapStateToProps = (state: StateModel) => {
  return {
    isMentorStatus: state.isMentorStatus,
    isShowSettingsModal: state.isShowSettingsModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeMentorStatus: () => dispatch(changeMentorStatus()),
    setShowModalSetting: (value: boolean) => dispatch(setShowModalSettings(value)),
  };
};
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
