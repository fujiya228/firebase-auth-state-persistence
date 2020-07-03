let subscribe = firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in')
    document.getElementById('auth').innerText = 'Logged In'
  } else {
    console.log('not logged in')
    document.getElementById('auth').innerText = 'Not Logged In'
  }
})

function logout() {
  firebase.auth().signOut().then(() => {
    console.log('ログアウトしました')
    alert('ログアウトしました')
  })
}