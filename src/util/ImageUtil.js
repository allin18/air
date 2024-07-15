import { saveAs } from 'file-saver';
import FileUtil from "./FileUtil";

export default class ImageUtil {
    static getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    static download(file) {
        const time = Date.now();
        const extensionName = FileUtil.getExtensionName(file.name);
        saveAs(file, `air-download-${time}.${extensionName}`);
    }
}

// import heic2any from "heic2any";
// export function heic2jpeg(file) {
//     return new Promise((resolve => {
//         heic2any({
//             blob: file,
//             toType: "image/jpeg",
//             quality: 0.7, // cuts the quality and size by half
//         })
//             .then(function (resultBlob) {
//                 let newFile = new File(
//                     [resultBlob],
//                     file.name.substring(0,file.name.lastIndexOf('.'))+".jpeg",
//                     {
//                         type: "image/jpeg",
//                     },
//                 );
//                 resolve(newFile);
//             });
//     }))
// }