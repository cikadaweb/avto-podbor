import {useState, useEffect} from "react";
import './BaseImage.css';
export const BaseImage = ({path, width, height}) => {

    const [imagePaddingTop, setImagePaddingTop] = useState(0);

    useEffect(() => {
        setImagePaddingTop(height / width * 100);
    }, [width, height]);

    return (
        <picture className="base-image" style={{paddingTop: `${imagePaddingTop}%`}}>
            <img className="base-image__img" src={path} alt="picture"/>
        </picture>
    );
};