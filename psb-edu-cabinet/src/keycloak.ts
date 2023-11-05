import environment from "./enviroment";

export const keycloakSetting = {
    authority: `${environment.keycloakConfig.url}auth/realms/${environment.keycloakConfig.realm}`,
    client_id: environment.keycloakConfig.clientId,
}

