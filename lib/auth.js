export async function loginUser(email, password) {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  export async function getUserData(token) {
    try {
      const response = await fetch('http://localhost:8000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
  
      if (!response.ok) {
        throw new Error('Token not valid' + response.status);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function registerUser(username, email, password, c_password) {
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, c_password }),
      });
  
      if (!response.ok) {
        throw new Error('Register failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  export async function updateUser(formData, token) {
    try {
      const response = await fetch('http://localhost:8000/api/profile/update?_method=PUT', {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Update user failed: ${errorText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in updateUser:', error);
      throw error;
    }
  }
  
  