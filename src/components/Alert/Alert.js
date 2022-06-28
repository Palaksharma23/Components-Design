import store from '../../store/store';


export function useToast(passed) {
    store.commit('addToast',passed);
}

export function useAlert(givenType, agreeFunc, cancelFunc, givenTitle, GivenMessage) {
    store.commit('addAlert', {
        agree: agreeFunc,
        cancel:cancelFunc,
        title: givenTitle,
        type: givenType,
        message: GivenMessage
    });

}