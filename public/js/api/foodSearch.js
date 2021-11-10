
URL = "https://trackapi.nutritionix.com/v2/natural/nutrients"

API_ID = "13d0b85f"

API_KEY = "4c93a10abee1dd24832dde352946ebf1"

API_USER_ID = "0"

const foodSearch = async (query) => {
    
    let result = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-app-id': API_ID,
            'x-app-key': API_KEY,
            'x-remote-user-id': API_USER_ID
        },
        body: `{"query":"${query}"}`
    })

    const json = result.json()
    return json
}