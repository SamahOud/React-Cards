import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import ROUTES from '../../../core/routes/routesModel';

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <Container >
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} justifyContent="center">
                    <img src='/React-Cards/assets/images/error_page1.png'
                         alt="Error Page" width="100%"/>
                </Grid>
                
                <Button variant="text" color="primary" onClick={() => navigate(ROUTES.CARDS)}
                    style={{ marginTop: "20px", fontSize: "20px" }}>
                    Go back to homepage
                </Button>
            </Grid>
        </Container>
    )
}

export default ErrorPage
