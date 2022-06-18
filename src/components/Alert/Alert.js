import store from '../../store/store';

export function useToast(givenType, givenTitle, GivenMessage, givenTime) {
     //console.dir(msg+" "+type+" "+time+" "+title)
    store.commit('addToast', {
        title: givenTitle,
        type: givenType,
        message: GivenMessage,
        time: givenTime

    });

}

export function useAlert(givenType, agreeFunc, cancelFunc, givenTitle, GivenMessage) {
    //console.dir(msg+" "+type+" "+time+" "+title)
    store.commit('addAlert', {
        agree: agreeFunc,
        cancel:cancelFunc,
        title: givenTitle,
        type: givenType,
        message: GivenMessage
    });

}