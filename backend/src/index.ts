import express from 'express';
import cors from 'cors';
import { User } from '@myproject/shared';

const app = express();
app.use(cors());

// ... rest of the code remains the same

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});