import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function ArtDetails() {
  const { id } = useParams();
  const url = `https://api.harvardartmuseums.org/object/${id}/?apikey=${process.env.REACT_APP_API_KEY}`;

  const { data, loading, error, fetchData } = useFetch(url);

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData();
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="container-details">
      {loading ? (
        <p className="loading-details">
          Loading some beautiful arts for you...
        </p>
      ) : error ? (
        <p className="error-details">Error occurred while fetching data.</p>
      ) : (
        <>
          <img
            className="img-details"
            src={data.primaryimageurl}
            alt={data.title}
          />
          <div className="info-details">
            <h3 className="title-details">{data.title}</h3>
            <p>
              <small>DATED: {data.dated}</small>
            </p>
            <p>
              <small>
                ARTIST:{' '}
                {data.people && data.people.length > 0 && data.people[0].name
                  ? data.people[0].name
                  : 'Unknown'}
              </small>
            </p>
            <p>
              <small>CLASSIFICATION: {data.classification}</small>
            </p>
            <p>
              <small>MEDIUM: {data.medium}</small>
            </p>
            <p>
              <small>CULTURE: {data.culture}</small>
            </p>
            <p>
              <small>DIVISION: {data.division}</small>
            </p>
            <p>
              <small>TECHNIQUE: {data.technique}</small>
            </p>
            <p>
              <small>PROVENANCE: {data.provenance}</small>
            </p>
            <p>
              <small>
                VERIFICATION LEVEL: {data.verificationleveldescription}
              </small>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
