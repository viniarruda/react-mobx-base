import { types } from 'mobx-state-tree';

/**
 * Mobx State Tree Store
 * The store recieves 3 parameters
 *  1st one is the Store Name
 *  2nd is an object with the Props and Computed values
 *  3rd is and object with the Actions
 **/

const AuthStore = types
    .model('AuthStore', {
        logged: types.boolean,
    })
    .actions(self => ({
        login(logged) {
            self.logged = true;
        },
        logout(logged) {
            self.logged = false;
        },
    }));

export default AuthStore;