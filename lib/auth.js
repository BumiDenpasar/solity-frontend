const BASE_URL = 'https://secretly-immortal-ghoul.ngrok-free.app/api';

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function getUserData(token) {
    try {
        const response = await fetch(`${BASE_URL}/user`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true',
            },
        });

        if (!response.ok) {
            throw new Error('Token not valid' + response.status);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function checkToken(token) {
    try {
        const response = await fetch(`${BASE_URL}/verify-token`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true',
            },
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        return null;
    }
}

export async function registerUser(name, email, password, c_password) {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
            body: JSON.stringify({ name, email, password, c_password }),
        });

        if (!response.ok) {
            throw new Error('Register failed');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function logoutUser(token) {
    try {
        const response = await fetch(`${BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true',
            },
        });

        if (!response.ok) {
            throw new Error('Logout failed');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function updateUser(formData, token) {
    try {
        const response = await fetch(`${BASE_URL}/profile/update?_method=PUT`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true',
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', errorText);
            throw new Error(`Update user failed: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error in updateUser:', error);
        throw error;
    }
}