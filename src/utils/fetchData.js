export async function fetchData(url) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_UR}${url}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const asd = await response.json();
      return { response: asd };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {response:"", error:error}; // Return an empty array or handle the error as needed
    }
  }