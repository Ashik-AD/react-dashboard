
const validExtension = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

export default function checkForImage(fileName: string) {
    const ext = fileName.toLowerCase().split(".").pop();
    if(ext){
        return validExtension.includes(ext);
    }
    throw "Invlide image";
}