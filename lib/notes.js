const BASE_URL = 'https://secretly-immortal-ghoul.ngrok-free.app/api';

export async function getNotesData(token) {
    try {
        const response = await fetch(`${BASE_URL}/notes`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error('Error ' + response.statusText);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function getNoteData(id, token) {
    try {
        const response = await fetch(`${BASE_URL}/notes/${id}`, {
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

        return await response.json();
    } catch (error) {
        console.error('Error in getNoteData:', error.message);
        throw error;
    }
}

export async function updateNote(formData, id, token) {
    try {
        const response = await fetch(`${BASE_URL}/notes/${id}?_method=PUT`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error('Update note failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in update note:', error);
        throw error;
    }
}

export async function createNote(formData, token) {
    try {
        const response = await fetch(`${BASE_URL}/notes`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data', 
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error('Create note failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in update note:', error);
        throw error;
    }
}

export async function deleteNote(id, token) {
    try {
        const response = await fetch(`${BASE_URL}/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error('Delete note failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in Delete note:', error);
        throw error;
    }
}