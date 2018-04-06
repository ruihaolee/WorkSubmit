/*
 * @Author: liruihao02
 * @Date:   2018-04-05
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-06
 */
import 'whatwg-fetch';
export const fetchAPI = (fetchUrl, fetchData) => {
  let fetchString = '';
  for (let name in fetchData) {
    fetchString += `${name}=${fetchData[name]}&`;
  }
  fetchString = fetchString.slice(0, fetchString.length - 1);
  return fetch(fetchUrl, {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      body: fetchString
    })
    .then(response => response.text())
}