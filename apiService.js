import axios from 'axios';
// import notifyService from './notifySerivce';
const apiService = async (url, body, method) => {
    // DEV
    const URL = `http://localhost:4000/${url}`;
    // QA
    // const URL = `http://ec2-43-205-125-143.ap-south-1.compute.amazonaws.com/cmrarf/${url}`;
    // LIVE
    // const URL =`https://api.tanfund.in/tanfund/${url}`
    // UAT
    // const URL = `https://api.amizhthuat.in/cmarfp/${url}`
    const tenant = sessionStorage.getItem("token")
    if (method === 'unauthpost') {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        return axios.post(URL, body, config)
            .catch(function (error) {
                handleError(error)
            });
    }
    if (method === 'unauthget') {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return axios.get(URL, config)
            .catch(function (error) {
                handleError(error)
            });
    }
    if (method === 'post') {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': tenant,
            },
        };
        return axios.post(URL, body, config)
            .catch(function (error) {
                handleError(error)
            });
    }
    if (method === 'get') {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': tenant,
            },
        };
        return axios.get(URL, config)
            .catch(function (error) {
                handleError(error)
            });
    }
    if (method === 'download') {
        const config = {
            headers:
            {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'token': tenant,
            },
            responseType: 'arraybuffer',
        };
        return axios.get(URL, config)
            .catch(function (error) {
                handleError(error)
            });
    }
    if (method === 'fileupload') {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': tenant,
            },
        };
        return axios.post(URL, body, config)
            .catch(function (error) {
                handleError(error)
            });
    }
    if (method === 'downloadpost') {
        const config = {
            headers:
            {
                'Content-Type': 'application/json',
                'token': tenant,
            },
            responseType: 'arraybuffer',
        };
        return axios.post(URL, body, config)
            .catch(function (error) {
                handleError(error)
            });
    }
}

const handleError = (error) => {
    console.log(error)    
    // if (error.response) {        
    //     if (error.response.status === 403) {
    //         sessionStorage.clear()
    //         sessionStorage.setItem('lang', 'en')
    //         window.location.assign('/#/sign-in')
    //         return notifyService('danger', 'Internal server error !!', 'Please try again later')
    //     } else if (error.response.status === 400) {
    //         return notifyService('danger', 'Internal server error !!', 'Please try again later')
    //     } else if (error.response.data.errorResponseDTO && error.response.data.errorResponseDTO.errorMessage) {
    //         return notifyService('danger', 'Error', error.response.data.errorResponseDTO.errorMessage)
    //     } else {
    //         return notifyService('danger', 'Internal server error !!', 'Please try again later')
    //     }
    // } else if (error.message === 'Network Error') {
    //     console.log(error.message);
    //     window.location.assign('/#/under-maintenance')
    // } else {        
    //     notifyService('danger', 'Internal server error !!', 'Please try again later')
    // }

}



export default apiService
