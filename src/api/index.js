import axios from 'axios'

const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
    baseURL:`${baseUrl}/api`,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

export default {
    getProducts (params) {
        return apiAxios({
            method: 'get',
            url: '/products',
            params: params
        })
    },
    addProducts (data) {
        return apiAxios({
            method: 'post',
            url: '/products',
            data: data
        })
    },
    editProduct(data,id) {
        return apiAxios({
            method: 'post',
            url: '/products/' +id,
            data: data
        })
    },
    deleteProduct(id) {
        return apiAxios({
            method: 'delete',
            url:'/products/' + id,
        })

    }
}