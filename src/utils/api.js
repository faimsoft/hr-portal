import axios from "axios";
import { isAuthenticated, getAccessToken } from './session'

// export const baseUrl = "http://localhost:8080/";

export const baseUrl = "http://34.125.49.10:8080/";
export const zoomUrl = "https://api.zoom.us/v2";


const zoomToken = "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0MTcxMDYwLCJqdGkiOiI1ZDgwNzg2ZjBlZjM0OTQwOTZhZTgzOTZkMDg2YTEzMyIsInVzZXJfaWQiOjh9.TEsgzClSLKGf9CC-L7zx7qX-kyMU_AtXiqcJbcpGSaI"

export const signInApi = "account/sign-in/";
export const signUpApi = "account/sign-up/";

export const profileApi = "accounts/profile/";
export const profileUpdateApi = "accounts/update-account/";
export const resetPasswordApi = "accounts/reset-password/";

export const membersApi = "accounts/members/";
export const memberUpdateApi = "accounts/update-member/";
export const memeberActivateApi = "accounts/activate-member/";
export const memberDeleteApi = "accounts/delete-member/";
export const verifyTokenApi = "accounts/verify-token/";
export const activateAccountApi = "accounts/activate/";

//countries
export const apicountries = "common/data/";


export const routs = {
  signin: `${baseUrl}account/sign-in/`,
  signup: `${baseUrl}account/sign-up/`,
}

export function getRouts() {
  return {
    signin: `${baseUrl}account/sign-in/`,
    signup: `${baseUrl}account/sign-up/`,
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


