import { connect } from "react-redux";
import Forms from "../components/Forms";
import FormsEdit from "../components/FormsEdit";
import Board from "../components/Board";
import { addUser, editUser, delUser,  fetchUsers } from "../actions/Users";
import { fetchStatus } from "../actions/Statuses";
const mapStateToProps = (state) => {
  return {
    error: state.Users.error,
    items: state.Users.items,
    pending: state.Users.pending,
    editing: state.Users.editing,
    statuses : state.Statuses.statuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchUsers: () => {
      dispatch(fetchUsers());
    },
    dispatchAddUser: (data) => {
      dispatch(addUser(data));
    },
    dispatchEditUser: (id) => {
      dispatch(editUser(id));
    },
    dispatchFetchStatuses: () => {
      dispatch(fetchStatus());
    },
  };
};

const FormsWithLogic = connect(mapStateToProps, mapDispatchToProps)(Forms);
const FormsEditWithLogic = connect(mapStateToProps, mapDispatchToProps)(FormsEdit);
const BoardWithLogic = connect(mapStateToProps, mapDispatchToProps)(Board);

export default {
  FormsWithLogic,
  BoardWithLogic,
  FormsEditWithLogic
};
