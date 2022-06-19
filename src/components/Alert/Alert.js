import store from '../../store/store';


export function useToast(passed) {
    //console.dir(msg+" "+type+" "+time+" "+title)
    
    store.commit('addToast',passed);
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