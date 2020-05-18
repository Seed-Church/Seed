import {} from '../actions/Users'
import {API} from '../constant/API'
import axios from "axios";

const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchProductsPending());
        axios(API+`users`)
    }
}