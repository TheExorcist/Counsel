const url = "http://localhost:3000/logged_in_user"

const loggedInUser = (userData = {}) => {

    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        credentials: 'include',
        method: 'GET',
        mode: 'cors'
    }).then((response) => {
          if(response.status >= 200 && response.status < 300) {
            return response.json()
          }
          return Promise.reject(response)
        })
      .then((data) => { return data })
}

export default loggedInUser;
