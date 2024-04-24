/*  ------------------------------ API Calls ------------------------------  */

const FitbitDataComponent = ({ accessToken }) => {
    const APIRequest = async (endpoint, requestHeaders) => {
      const response = await fetch(endpoint, requestHeaders);
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Error fetching Fitbit data');
      }
    };
  
    const getProfile = async () => {
      const profileEndpoint = 'https://api.fitbit.com/1/user/-/profile.json';
      const profileHeaders = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      };
  
      return await APIRequest(profileEndpoint, profileHeaders);
    };
  
    const getUID = async () => {
      try {
        const profileData = await getProfile();
        const fitbitUserID = profileData.user?.encodedId;
  
        if (fitbitUserID) {
          return fitbitUserID;
        } else {
          console.error('Fitbit User ID not found in profile data.');
          return null;
        }
      } catch (error) {
        console.error("Error fetching Fitbit profile data: ", error);
        return null;
      }
    };
  
    const getHeartRateTimeSeries = async () => {
      const timeSeriesEndpoint = `https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json`;
      const timeSeriesHeaders = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      };
  
      return await APIRequest(timeSeriesEndpoint, timeSeriesHeaders);
    };

    const getAllActivities = async () => {
      const endpoint = `https://api.fitbit.com//1/user/-/activities/date/today.json`;
      const headers = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      };
      
      return await APIRequest(endpoint, headers);
    };

    const getAllSleep = async () => {
      const endpoint = `https://api.fitbit.com//1.2/user/-/sleep/date/today.json`;
      const headers = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      };
      
      return await APIRequest(endpoint, headers);
    };

    const getWeekStep = async () => {
      const today = new Date();
      const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      
      const formatDate = (date) => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
          const day = String(date.getDate()).padStart(2, '0');
          
          return `${year}-${month}-${day}`;
      };
      
      const todayStr = formatDate(today);
      const oneWeekAgoStr = formatDate(oneWeekAgo);
      
      const endpoint = `https://api.fitbit.com/1/user/-/activities/steps/date/${oneWeekAgoStr}/${todayStr}.json`;
      const headers = {
          headers: {
              Authorization: `Bearer ${accessToken}`,
          }
      };
      
      return await APIRequest(endpoint, headers);
  };

  const getWeekCalories = async () => {
    const today = new Date();
    const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    };
    
    const todayStr = formatDate(today);
    const oneWeekAgoStr = formatDate(oneWeekAgo);
    
    const endpoint = `https://api.fitbit.com/1/user/-/activities/calories/date/${oneWeekAgoStr}/${todayStr}.json`;
    const headers = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    };
    
    return await APIRequest(endpoint, headers);
};

  
    return {
      getProfile,
      getUID,
      getHeartRateTimeSeries,
      getAllActivities,
      getAllSleep,
      getWeekStep, 
      getWeekCalories
    };
  };
  
  export default FitbitDataComponent;