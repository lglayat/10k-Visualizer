export function signInUser(user){
  return {
    type: 'LOG_IN_SUCCESS',
    payload: user
  }
}

export function signOutUser(user){
  return {
    type: 'LOG_OUT_SUCCESS',
    payload: user
  }
}


export function signIn(user, props){
  return function(dispatch){
    const body = JSON.stringify(user)
    return fetch("http://localhost:3000/api/v1/login", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwtToken", res.jwt)
        dispatch(signInUser(res.user))
      })
      .then(res => props.history.push('/'))
  }
}

export function signOut(user, props) {
  return function(dispatch){
    localStorage.removeItem("jwtToken")
    dispatch(signOutUser(user))
  }
}
