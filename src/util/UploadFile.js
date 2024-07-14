import axios from "axios";

export async function uploadFile(url, file, onUploadProgress, headers= {}, params = {}) {
    try {
        // const file = document.querySelector('input[type=file]').files[0];
        const formData = new FormData();
        formData.append('file', file);
        for (const key in params) {
            formData.append(key, params[key]);
        }
        const response = await axios.post(
            url,
            formData,
            {
                headers: Object.assign({"Content-Type": "multipart/form-data"}, {...headers}),
                onUploadProgress: progressEvent => {
                    const {loaded, total} = progressEvent;
                    const percent = Math.round((loaded / total) * 100);
                    console.log(`progress：${percent}%`);
                    onUploadProgress(percent);
                }
            },
        );
        console.log(`HTTP Status Code: ${response.status}`);
        onUploadProgress(100);
        return true;
    } catch (error) {
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.error(`Error: ${error.response.data}`);
            console.log(`HTTP Status Code: ${error.response.status}`);
        } else {
            console.error(`Error: ${error.message}`);
        }
        return null;
    }
}