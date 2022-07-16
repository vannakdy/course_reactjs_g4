import axios from "axios";

export const config = {
    baseUrl :"https://nitc.cleverapps.io/",
    // baseUrl :"http://localhost:8080/",

}

export const fetchData = (url="",data={},method="GET") => {
    const token = localStorage.getItem("accessToken")
    return axios({
        url : config.baseUrl+url,
        data : data,
        method : method,
        headers : {
            Authorization: `Bearer ${token}`
        }
    }).then(res=>{
        return res.data;
    }).catch(err=>{
        var objEorror = {
            error : true,
            message : err
        }
        return objEorror
    })
}