import { Avatar } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import NavBarLink from "../../../../components/routes/NavBarLink"
import ROUTES from "../../../../../core/routes/routesModel"

const LogoIcon = () => {
    return (
        <NavBarLink to={ROUTES.CARDS} color="white">
            <IconButton 
                sx={{display: { xs: "inline-flex", md: "none" },
                    size: "large", edge: "start", color: "inherit",}}
                >
                <Avatar alt='me' src='/React-Cards/assets/images/business-card.png'></Avatar>
            </IconButton>
        </NavBarLink>
        
    )
}

export default LogoIcon
