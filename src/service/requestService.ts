class RequestService {
    async getRequest(url: string) {
        let data = await (await (fetch(url)
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log('Error: ', err)
            })
        ))
        return data
    }

    async postData(url: string, data: any) {

        const token: any = localStorage.getItem('token');

        return await (await(fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                method: 'post',
                body: JSON.stringify(data)
            })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log('Error: ', err)
            })
        ))
    }

    async putData(url: string, data: any) {

        const token: any = localStorage.getItem('token');

        return await (await(fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                method: 'put',
                body: JSON.stringify(data)
            })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log('Error: ', err)
            })
        ))
    }
}
    
export default new RequestService()