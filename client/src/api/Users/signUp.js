const url = 'http://localhost:3000/users'

const userSignUp = (userData = {}) => {
    debugger;
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        credentials: 'include',
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ user: { email: 'modsntdsdsyrexfddsdsdsdd23rhcfdp@gmail.com', password: '123456', password_confirmation: '123456' }})
    }).then((response) => { return response.json() })
      .then((data) => { return data })
      .catch((error) => { return error })
}

export default userSignUp;
