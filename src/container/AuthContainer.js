import { connect } from "react-redux";
import Forms from "../components/Forms";
import Board from "../components/Board";
import UsersCard from "../components/UsersCard";
import { authHuman } from "../actions/Auth";


const mapStateToProps = (state) => {
  return {
    auth_error: state.Auth.error,
    auth_items: state.Auth.items,
    auth_pending: state.Auth.pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchOneUsers: (data) => {
      dispatch(authHuman(data));
    },
  };
};



export default {

};
