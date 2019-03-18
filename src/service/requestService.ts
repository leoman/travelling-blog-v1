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
        return await (await(fetch(url, {
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
        return await (await(fetch(url, {
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