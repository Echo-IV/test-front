import React from "react";

import { Item, Bold, Box } from "./User.styled";

const UserItem = ({
  user: {
    id,
    name,
    email,
    username,
    phone,
    website,
    address: {
      street,
      suite,
      zipcode,
      city,
      geo: { lat, lng },
    },
    company: { name: companyName, catchPhrase, bs },
  },
}) => {
  return (
    <Item key={id}>
      <div>
        <Bold>
          {name} #{id}
        </Bold>

        <p>Username : {username}</p>
        <p>Email : {email}</p>
        <p>Phone : {phone}</p>
        <p>Website : {website}</p>
      </div>

      <Box>
        <div>
          <Bold>Address</Bold>
          <p>Street : {street}</p>
          <p>Suite : {suite}</p>
          <p>Zip code: {zipcode}</p>
          <p>City: {city}</p>
          <Bold>Geolocalisation</Bold>
          <p>Lat: {lat}</p>
          <p>Lng: {lng}</p>
        </div>

        <div>
          <Bold>Company</Bold>
          <p>Domain : {bs}</p>
          <p>Name: {companyName}</p>
          <p>{catchPhrase}</p>
        </div>
      </Box>
    </Item>
  );
};

export default UserItem;
