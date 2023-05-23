import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { getNestedValue } from '../utils/apiUtils';

const useAPI = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  // Ref for axios cancellation token source
  const sourceRef = useRef(null);

  const makeApiCall = async (url, method, requestBody, responseDataPath) => {
    setIsLoading(true);
    setError(null);
    setResponseData(null);

    // Cancel previous request if it exists
    if (sourceRef.current) {
      sourceRef.current.cancel();
    }

    // Create new cancellation token source
    sourceRef.current = axios.CancelToken.source();

    try {
      const response = await axios({
        method,
        url,
        cancelToken: sourceRef.current.token, // Assign cancellation token to the request
      });

      // Set the response data dynamically based on the responseDataPath
      const dynamicResponseData = responseDataPath
        ? getNestedValue(response.data, responseDataPath)
        : response.data;

      setResponseData(dynamicResponseData);
      console.log(responseData)
    } catch (error) {
      if (!axios.isCancel(error)) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Cleanup function to cancel ongoing request on unmount
    return () => {
      if (sourceRef.current) {
        sourceRef.current.cancel('Request canceled due to component unmount.');
      }
    };
  }, []);

  return { isLoading, error, responseData, makeApiCall };
};

export default useAPI;
