export interface AppInfo {
    appIcon: string,
    appName: string,
    version: string,
    powerd?: string,
    copyright?: string,
}

export interface Screen {
    isWS: boolean,
    h: number,
    w: number,
}

export interface Device {
    [key:string]:any
}

export type KeepAlivePage = string[];

export interface PluginKeys{
    [key:string]:string
}

export interface State {
    appinfo:AppInfo,
    screen:Screen,
    device:Device,
    keepAlivePage:KeepAlivePage,
    isLoadingPage:boolean,
    pluginKeys:PluginKeys
}