export const getOpenPages = (state) => state.openPages.openPages;
export const getFirstOpenPage = (state) => state.openPages.openPages[0];
export const getLastOpenPage = (state) => state.openPages.openPages[state.openPages.openPages.length - 1];
