import { connect } from "react-redux";
import Forms from "../components/Forms";
import Board from "../components/Board";
import { bindActionCreators } from "redux";
import { addUser, editUser, delUser, getUsers, fetchUsers } from "../actions/Users";

const mapStateToProps = (state) => {
  console.log(`state`,state);
  
  return {
    error: state.Users.error,
    users: state.Users.users,
    pending:state.Users.pending
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    dispatchFetchUsers: (data) => {
      dispatch(fetchUsers());
    },
  }
};

const FormsWithLogic = connect(mapStateToProps, mapDispatchToProps)(Forms);
const BoardWithLogic = connect(mapStateToProps, mapDispatchToProps)(Board);

export default {
  FormsWithLogic,
  BoardWithLogic,
};
