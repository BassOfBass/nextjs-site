import { productionMode } from "./env-vars";

export const isProduction = productionMode === "prod" ? true : false;