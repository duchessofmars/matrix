export const baseUrl = "http://localhost:3001";
  
  export function handleResponse(res) {
    if (res.ok) {
      console.log(res.err);
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
  }
 
  
  function getWork() {
    return fetch(`${this._baseUrl}/work`, {
        headers: {
            "Content-Type": "application/json",
            
        },
    }).then(this._handleResponse); // log the error to the console
  }
  
  function putWork(token) {
    return fetch(`${this._baseUrl}/work`, {
      method: "PUT",
      body: JSON.stringify({
        worker_id,
      }),
    }).then(this._handleResponse); // log the error to the console
  }
  
 