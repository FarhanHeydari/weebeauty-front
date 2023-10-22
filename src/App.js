import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Welcome} from './pages/Welcome';
import {Login} from './pages/Login';
import {SignUp} from './pages/SignUp';
import './assets/css/index.css';
import {Profile} from "./pages/Profile";
import {Appointment} from "./pages/Appointment";
import {Forum} from "./pages/Forum";
import {Analyze} from "./pages/Analyze";
import {AnalyzeChat} from "./pages/AnalyzeChat";
import {FillProfile} from "./pages/FillProfile";
import {Guide} from "./pages/Guide";
import {Shop} from "./pages/Shop";
import {MyAppointments} from "./pages/MyAppointments";
import AdminLogin from "./pages/admin/AdminLogin";
import {AdminDashboard} from "./pages/admin/AdminDashboard";
import AdminUserList from "./pages/admin/AdminUserList";
import {AdminAppointments} from "./pages/admin/AdminAppointments";
import {EditProfile} from "./pages/EditProfile";
import {SwitchLang} from "./pages/SwitchLang";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/welcome'} element={<Welcome/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
            <Route path={'/shop'} element={<Shop/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/profile/guide'} element={<Guide/>}/>
            <Route path={'/profile/appointments'} element={<MyAppointments/>}/>
            <Route path={'/profile/edit'} element={<EditProfile/>}/>
            <Route path={'/profile/lang'} element={<SwitchLang />} />
            <Route path={'/appointment'} element={<Appointment/>}/>
            <Route path={'/forum'} element={<Forum/>}/>
            <Route path={'/analyze'} element={<Analyze/>}/>
            <Route path={'/signup/complete'} element={<FillProfile/>}/>
            <Route path={'/analyze/chat/'} element={<AnalyzeChat/>}/>
            <Route path={'/admin'} element={<AdminLogin/>}/>
            <Route path={'/admin/dashboard'} element={<AdminDashboard/>}/>
            <Route path={'/admin/user-list'} element={<AdminUserList/>}/>
            <Route path={'/admin/appointments'} element={<AdminAppointments/>}/>
        </Routes>
    );
}

export default App;
