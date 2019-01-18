export function getStyles (id) {
  id = parseInt(id)
  // background-image: url('img/intro-carousel/4.jpg');

  let imgFile = String(id).concat(`.jpg'`)
  let background = `'img/intro-carousel/`.concat(imgFile)

  let style = {
    backgroundImage: `url(${background})`
  }

  return style
}

export function isEmpty (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) { return false }
  }
  return true
}

export function checkProperties (obj) {
  for (var key in obj) {
    if (obj[key] === null || obj[key].length < 1) { return key }
  }
  return true
}

export function validateEmail (email) {
  // First check if any value was actually set
  if (email.length === 0) return false
  // Now validate the email format using Regex
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
  return re.test(email)
}

export function validPhoneNo (phone) {
  // let re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  if (phone.length === 0) return false
  return re.test(phone)
}

export function setPolyColor (id) {
  id = parseInt(id)
  let polyColor = ''

  switch (id) {
    // case 1:
    //   polyColor = 'red'
    //   break
    // case 2:
    //   polyColor = 'blue'
    //   break
    // case 3:
    //   polyColor = 'white'
    //   break
    // case 4:
    //   polyColor = 'yellow'
    //   break
    // case 5:
    //   polyColor = 'orange'
    //   break
    // case 6:
    //   polyColor = 'navy'
    //   break
    // case 7:
    //   polyColor = 'black'
    //   break
    // case 8:
    //   polyColor = 'navy'
    //   break

    default: polyColor = 'gray'
  }
  return polyColor
}
