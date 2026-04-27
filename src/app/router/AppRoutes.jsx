import {Route, Routes} from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage.jsx";
import { DashboardPage } from "../layouts/DashboardPage.jsx";
import { Fields } from "../../features/fields/components/Fields.jsx";
import { Reservations } from "../../features/reservations/components/Reservations.jsx";
import { Teams } from "../../features/teams/components/Teams.jsx";
import { Tournaments } from "../../features/tournaments/components/Tournaments.jsx";
import { Users } from "../../features/users/components/Users.jsx";

export const AppRoutes = () => {

    return(
        <Routes>

            {/* Publicas */}
            <Route path="/" element={<AuthPage />}/>

            {/* Protegido por role */}
            <Route path="/dashboard/*" element={<DashboardPage />}>
                <Route path="fields" element={<Fields />} />
                <Route path="reservations" element={<Reservations />} />
                <Route path="teams" element={<Teams />} />
                <Route path="tournaments" element={<Tournaments />} />
                <Route path="users" element={<Users />} />
            </Route>
            
            
        <Route path ="*" element={<h1> = Página no encontrada</h1>} />
            
        </Routes>
            
            
        
    );
}