import loadable from "@loadable/component";
export const FileLayout = loadable(()=>import("./FileLayout/index"),{fallback : <>Loader</>});