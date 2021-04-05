import React, { useState, useEffect } from "react";
import { getPhoto } from "../../services/photos";

const PhotoItem = () => {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhoto(1);
      setPhotoUrl(data.url);
    };

    fetchData();
  }, []);

  return <div>{photoUrl && <img width="50" src={photoUrl} alt="logo" />}</div>;
};

export default PhotoItem;
