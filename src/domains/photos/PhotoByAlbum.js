import React, { useEffect, useState } from "react";

import { Style } from "./Photo.styled";
import { getPhotos } from "../../services/photos";

// Display photos which a title length <= to the limit in parameter

const PhotosByAlbum = ({ limit }) => {
  const [array, setArray] = useState([]);
  const displayLimitSize = limit;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhotos();

      var t0 = performance.now();

      const datachanged = data
        .sort((a, b) => {
          return a.title.length > b.title.length;
        })
        .map((value) => {
          value.title = value.title.toUpperCase();
          value.titleNbLetters = value.title.length;
          return value;
        });

      const dataSorted = datachanged.filter(
        (v) => v.title.length <= displayLimitSize
      );

      const albums = [];
      dataSorted.forEach((data) => {
        if (albums[data.albumId] && albums[data.albumId].length >= 0) {
          albums[data.albumId].push(data);
        } else {
          albums[data.albumId] = [data];
        }
      });
      setArray(albums);
      var t1 = performance.now();
      console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
    };

    fetchData();
  }, [displayLimitSize]);

  return (
    <Style>
      {array.map((value, key) => {
        return (
          <div key={key}>
            {value.map((photo) => {
              return <div key={photo.id}>{photo.title}</div>;
            })}
            <hr />
          </div>
        );
      })}
    </Style>
  );
};

export default PhotosByAlbum;
