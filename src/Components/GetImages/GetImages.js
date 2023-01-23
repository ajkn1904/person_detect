import { useEffect } from 'react';
import { storage } from '../../Firebase/firebase.config';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
const GetImages = ({setPersonImages, personImages}) => {

    const storageRef = ref(storage)
    const images = {}
    //console.log(storage)

    useEffect(() => {
        listAll(storageRef).then(response => {
            response.items.forEach(data => {
                getDownloadURL(data).then(url => {
                    const pathName = data._location.path_;
                    const imageName = pathName.slice(0, -4);
                    //console.log(imageName,": ", url, pathName);
                    images[imageName] = url;
                    setPersonImages(images)
                })
            })
        })
    }, []);

   // console.log(personImages);
};

export default GetImages;