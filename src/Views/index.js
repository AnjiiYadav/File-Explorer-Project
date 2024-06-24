import loadable from "@loadable/component";

export const FileExplorer = loadable(()=>import(("./FileExplorer/index")))