import Cookies from 'js-cookie';

const uidKey = 'quiz-uid';

export function setUid(uid: string) {
    Cookies.set(uidKey, uid);
}

export function getUid() {
    return Cookies.get(uidKey);
}