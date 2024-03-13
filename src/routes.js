
export const Routes = {
    Presentation: {
        title: "Home",
        path: "/",
        private: false,
    },
    DashboardOverview: {
        title: "",
        path: "/dashboard",
        private: true,
    },
    Settings: {
        title: "",
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