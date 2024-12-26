
export async function getNotesData(token) {
 
    try {
      const response = await fetch('http://localhost:8000/api/notes', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
  
      if (!response.ok) {
        throw new Error('Error ' + response.statusText);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  
  export async function getNoteData(id, token) {
    try {
      const response = await fetch(`http://localhost:8000/api/notes/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`failed: ${errorText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in getNoteData:', error.message); // Log the error
      throw error;
    }
  }


  export async function updateNote(formData, id, token) {

    try {
      const response = await fetch(`http://localhost:8000/api/notes/${id}?_method=PUT`, {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Update note failed`);
        //throw new Error(`Update note failed: ${errorText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in update note:', error);
      throw error;
    }
  }
  
  export async function createNote(formData, token) {

    try {
      const response = await fetch('http://localhost:8000/api/notes/', {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Create note failed`);
        //throw new Error(`Update note failed: ${errorText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in update note:', error);
      throw error;
    }
  }