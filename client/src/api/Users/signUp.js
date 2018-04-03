const url = 'http://localhost:3000/users'

const userSignUp = (userData = {}) => {
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ user: { email: 'montyrex11323rhcp@gmail.com', password: 'Sidjan@123', password_confirmation: 'Sidjan@123' }})
    }).then(response => response.json())
      .then(data => data.body)
      .catch(error => error)
}

export default userSignUp;