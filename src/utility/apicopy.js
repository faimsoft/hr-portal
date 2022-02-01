import axios from "axios";
import { isAuthenticated, getAccessToken } from './session'

// export const baseUrl = "http://localhost:8080/";

export const baseUrl = "http://192.168.1.197:8080/";
export const zoomUrl = "https://api.zoom.us/v2";

const zoomToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjVNUHV4ZTR5UVYtYldHclFYU1N1ZUEiLCJleHAiOjE2NDg3NTEzOTksImlhdCI6MTY0MTI3NjgxOH0.yyppd6thcgti7NhfMYx3jUJiU1RpJr-Dipa3hTx4914"

export const signInApi = "accounts/sign-in/";
export const signUpApi ="account/sign-up/";
export const profileApi = "accounts/profile/";
export const profileUpdateApi = "accounts/update-account/";
export const resetPasswordApi = "accounts/reset-password/";

export const membersApi = "accounts/members/";
export const memberUpdateApi = "accounts/update-member/";
export const memeberActivateApi = "accounts/activate-member/";
export const memberDeleteApi = "accounts/delete-member/";
export const verifyTokenApi = "accounts/verify-token/";
export const activateAccountApi = "accounts/activate/";


export const routs = {
  signin: `${baseUrl}accounts/sign-in/`,
  signup: `${baseUrl}accounts/sign-up/`,
}

export function getRouts() {
  return {
    signin: `${baseUrl}accounts/sign-in/`,
    signup: `${baseUrl}accounts/sign-up/`,
    profile: `${baseUrl}accounts/profile/`,
  }
}

export function apiCallUnsecureGet(api, response, error) {

  console.log('apiCallSecureGet ', api);
  axios
    .get(`${baseUrl}${api}`)
    .then((res) => {
      console.warn('result', res)
      const result = res.data;
      if (result.code === 200) {
        response(result)
      } else {
        error(result.msg)
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg)
      } else if (err.request) {
        console.log(err.request);
        error(err.request)
      } else {
        console.log('Error', err.message);
        error(`Error ${err.message}`)
      }
      console.log(err.config);
    });

}

export function apiCallSecureGet(api, response, error) {

  console.log('apiCallSecureGet ', api);
  axios
    .get(`${baseUrl}${api}`,
      {
        headers: {
          'Authorization': `Token ${getAccessToken()}`
        }
      }
    )
    .then((res) => {
      console.warn('result', res)
      const result = res.data;
      if (result.code === 200) {
        response(result)
      } else {
        error(result.msg)
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg)
      } else if (err.request) {
        console.log(err.request);
        error(err.request)
      } else {
        console.log('Error', err.message);
        error(`Error ${err.message}`)
      }
      console.log(err.config);
    });

}

export function apiPostUnsecure(api, data, response, error) {

  console.log('apiPostUnsecure ', api, 'data ', data);

  axios
    .post(`${baseUrl}${api}`, data)
    .then((res) => {
      console.warn('result', res)

      const result = res.data;

      if (result.code === 200) {
        response(result)
      } else {
        error(result.msg)
      }

    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg)
      } else if (err.request) {
        console.log(err.request);
        error(err.request)
      } else {
        console.log('Error', err.message);
        error(`Error ${err.message}`)
      }
      console.log(err.config);
    });
}


export function apiPostSecure(api, data, response, error) {

  console.log('apiPostSecure ', api, 'data ', data);

  axios
    .post(
      `${baseUrl}${api}`,
      data,
      {
        headers: {
          'Authorization': `Token ${getAccessToken()}`
        }
      }
    )
    .then((res) => {
      console.warn('result', res)

      const result = res.data;

      if (result.code === 200) {
        response(result)
      } else {
        error(result.msg)
      }

    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg)
      } else if (err.request) {
        console.log(err.request);
        error(err.request)
      } else {
        console.log('Error', err.message);
        error(`Error ${err.message}`)
      }
      console.log(err.config);
    });
}

export function createZoomUser(data, response, error) {

  console.log('createZoomUser ', data);

  axios
    .post(
      `${zoomUrl}/users`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${zoomToken}`
        }
      }
    )
    .then((res) => {
      console.warn('result ok', res)
    })
    .catch((err) => {
      console.warn('result err', err)
      if (err.response) {
        error(err.response.data.msg)
      } else if (err.request) {
        console.log(err.request);
        error(err.request)
      } else {
        console.log('Error', err.message);
        error(`Error ${err.message}`)
      }
      console.log(err.config);
    });
}

export function apiPutSecure(api, data, response, error) {

  console.log('apiPutSecure ', api, 'data ', data);

  axios
    .put(
      `${baseUrl}${api}`,
      data,
      {
        headers: {
          'Authorization': `Token ${getAccessToken()}`
        }
      }
    )
    .then((res) => {
      console.warn('result', res)

      const result = res.data;

      if (result.code === 200) {
        response(result)
      } else {
        error(result.msg)
      }

    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg)
      } else if (err.request) {
        console.log(err.request);
        error(err.request)
      } else {
        console.log('Error', err.message);
        error(`Error ${err.message}`)
      }
      console.log(err.config);
    });
}

export default getRouts;


