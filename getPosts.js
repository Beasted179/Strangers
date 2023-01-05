import { useState } from "react";
import { Navigate } from "react-router-dom";
export async function getPosts(token) {
    let response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt/posts', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      let result = await response.json();
      return result
}


export async function postUser(username, password) {
  try {
    let response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: username,
      password: password
    }
  })
}) 
let result = await response.json()
  return result
  } catch(err){
    console.error(err)
  }
  

}

export async function loginUser(username, password) {
  try {
    let response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: username,
      password: password
    }
  })
}) 
let result = await response.json()
  return result
  } catch(err){
    console.error(err)
  }
    
}


