import http from './httpsService';

const loginEndpoint = "/login";

export default function login(user) {

    return http.post(loginEndpoint, user);

}