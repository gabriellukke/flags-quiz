import { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { CountriesContext } from '../context/Countries';

const Library = () => {
  const { allCountries } = useContext(CountriesContext);

  return (
    <>
      <h1>Library Page</h1>
      <article>
        {
          !!allCountries.length && allCountries.map((country) => (
            <Card key={country.cca3} sx={{ maxWidth: 245 }}>
              <CardMedia
                component="img"
                height="140"
                image={country.flags.png}
                alt={`${country.name.common} flag`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="sectionS">
                  {country.name.common}
                </Typography>
              </CardContent>
            </Card>
          ))
        }
      </article>
    </>
  );
};

export default Library;
