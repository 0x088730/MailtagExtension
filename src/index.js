import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/mailtag-dashboard.scss?v=1.3.0";
import "assets/css/custom.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import mixpanel from "mixpanel-browser";
import { Provider } from "react-redux";
import { MixpanelProvider } from "react-mixpanel";
import store from "./redux/store";
import App from "App";
import { AuthProvider } from "./context/AuthProvider";
mixpanel.init("4be6e11fdaf82522bfb8f8f3cbd22696");
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MixpanelProvider mixpanel={mixpanel}>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </MixpanelProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
