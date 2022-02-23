const BASE_URL = `https://api.pluxurymoviesexplorer.nomoredomains.monster`

const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Упс, произошла ошибка: ${response.statusText}`);

const getToken = () => {
  const token = localStorage.getItem('jwt');
  return {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
}

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(password, email, name)
  })
  .then(checkResponse)
}

export const authorize = ({password, email}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(checkResponse)
}

export const getContent = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  .then(checkResponse)
}

export const updateUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: getToken(),
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    })
  })
  .then(checkResponse)
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: getToken()
  })
  .then(checkResponse)
}

export const deleteCard = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: getToken()
  })
  .then(checkResponse)
}

export const addNewMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: getToken(),
    body: JSON.stringify(movie)
  })
  .then(checkResponse)
}
