import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

/* PUBLIC */

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* USER */

import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import Recommendations from "./pages/Recommendations";

/* ADMIN */

import AdminDashboard from "./pages/admin/AdminDashboard";

/* ROUTE GUARDS */

import ProtectedRoute from "./utils/ProtectedRoute";
import AdminRoute from "./utils/AdminRoute";

function App(){

return(

<BrowserRouter>

<Routes>

{/* PUBLIC */}

<Route
path="/"
element={<Landing />}
/>

<Route
path="/login"
element={<Login />}
/>

<Route
path="/register"
element={<Register />}
/>

{/* USER */}

<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>

<Route
path="/devices"
element={
<ProtectedRoute>
<Devices />
</ProtectedRoute>
}
/>

<Route
path="/analytics"
element={
<ProtectedRoute>
<Analytics />
</ProtectedRoute>
}
/>

<Route
path="/alerts"
element={
<ProtectedRoute>
<Alerts />
</ProtectedRoute>
}
/>

<Route
path="/recommendations"
element={
<ProtectedRoute>
<Recommendations />
</ProtectedRoute>
}
/>

{/* ADMIN */}

<Route
path="/admin"
element={
<AdminRoute>
<AdminDashboard />
</AdminRoute>
}
/>

</Routes>

</BrowserRouter>

);

}

export default App;