
export const Routes = {
    Presentation: {
        title: "Home",
        path: "/",
        private: false,
    },
    DashboardOverview: {
        title: "Dashboard",
        path: "/dashboard",
        private: true,
    },
    Cars: {
        title: "Auto",
        path: "/cars",
        private: true,
    },
    Car: {
        title: "",
        path: "/car/:id",
        private: true,
    },
    Drivers: {
        title: "Drivers",
        path: "/drivers",
        private: true,
    },
    Settings: {
        title: "Settings",
        path: "/settings",
        privateRouter: true,
    },
    Signin: {
        title: "",
        path: "/login",
        private: false,
    },
    Signup: {
        title: "",
        path: "/sign-up",
        private: false,
    },
    ForgotPassword: {
        title: "",
        path: "/forgot-password",
        private: false,
    },
    ResetPassword: {
        title: "",
        path: "/reset-password",
        private: true,
    },
    Lock: {
        title: "",
        path: "/lock",
        private: true,
    },
    NotFound: {
        title: "",
        path: "/404",
        private: false,
    },
    ServerError: {
        title: "",
        path: "/500",
        private: false,
    },
};