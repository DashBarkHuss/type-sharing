import express from 'express';
import cors from 'cors';
import { User } from '@myproject/shared';

const app = express();
app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/users', (req, res) => {
    const users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@example.com'
        }
    ];

    res.json(users);
});
