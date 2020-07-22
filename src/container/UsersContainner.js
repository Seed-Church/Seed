import { connect } from "react-redux";
import Forms from "../components/Forms";
import Board from "../components/Board";
import Card from '../components/Cards'
import UsersCard from "../components/UsersCard";
import { addUser, editUser, deleteUser, updateUser, fetchUsers, searchUser, fetchOneUser, countUser } from "../actions/Users";
import { fetchStatus } from "../actions/Statuses";
import { fetchGroups } from "../actions/Groups";

const mapStateToProps = (state) => {
  return {
    error: state.Users.error,
    items: state.Users.items,
    pending: state.Users.pending,
    editing: state.Users.editing,
    statuses: state.Statuses.statuses,
    groups: state.Groups.groups,
    word: state.Users.word,
    amountUsers: state.Users.amountUsers
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
    dispatchFetchGroups: () => {
      dispatch(fetchGroups());
    },
    dispatchDeleteUser: (id) => {
      dispatch(deleteUser(id));
    },
    dispatchUpdateUser: (id, data) => {
      dispatch(updateUser(id, data));
    },
    dispatchSearcheUser: (word) => {
      dispatch(searchUser(word));
    },
    dispatchFetchOneUsers: (id) => {
      dispatch(fetchOneUser(id));
    },
    dispatchCountUser: () => {
      dispatch(countUser());
    },
  };
};

const FormsWithLogic = connect(mapStateToProps, mapDispatchToProps)(Forms);
const BoardWithLogic = connect(mapStateToProps, mapDispatchToProps)(Board);
const UsersCardWithLogic = connect(mapStateToProps, mapDispatchToProps)(UsersCard);
const CardWithLogic = connect(mapStateToProps, mapDispatchToProps)(Card);
export default {
  FormsWithLogic,
  BoardWithLogic,
  UsersCardWithLogic,
  CardWithLogic
};
