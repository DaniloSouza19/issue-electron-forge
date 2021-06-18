interface IApiWindow extends Window {
  dgsApi: {
    getAppVersion: () => Promise<string>;
    showService: () => Promise<string>;
  }
}

export { IApiWindow }
