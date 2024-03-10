import { Typography } from "@mui/material"
import ROUTES from "../../../../../core/routes/routesModel"
import NavBarLink from "../../../../components/routes/NavBarLink"

const Logo = () => {
    return (
        <NavBarLink to={ROUTES.CARDS} color="white">
            <Typography
                variant="h4"
                sx={{ display: { xs: "none", md: "inline-flex" },
                    marginRight: 2, fontFamily: "fantasy", color: "white"}}
                >
                BCard
            </Typography>
        </NavBarLink>
    )
}

export default Logo
