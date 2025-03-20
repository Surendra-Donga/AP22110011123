import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

// API Credentials
const credentials = {
    companyName: "Afford Medical",
    clientID: "c66c60e-7711-4303-9e01-d05ae79af1b3",
    clientSecret: "ISVPIFhUxtSYIrVu",
    ownerName: "Donga Surendra",
    ownerEmail: "surendra_donga@smap.edu.in",
    rollNo: "AP2211001123"
};

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Get Auth Token
        const authResponse = await axios.post(`${BASE_URL}/auth`, credentials);
        const token = authResponse.data.access_token;

        // Fetch Users
        const usersResponse = await axios.get(`${BASE_URL}/users`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        res.status(200).json(usersResponse.data);
    } catch (error) {
        res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
}
