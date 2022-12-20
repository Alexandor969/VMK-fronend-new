import { createStore } from "vuex";
import axios from "../api";
import { user } from "../types/types";

export default createStore({
    state: {
            userId:  "",
            fullName: "",
            contactEmail: "",
            phone: "",
            dateBirth: "",

    },
    mutations: {
        getUser(state){
            axios.users.getUserInfo({} as user)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {

            })
        }
    },
    actions: {

    },
    getters: {

    },
})
