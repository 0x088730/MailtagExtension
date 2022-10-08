const openInNewTab = (url, handler = (() => { })) => {
  const popup = window.open(url, "_blank", "popup");
  popup.onunload = () => handler(popup);
};
export default openInNewTab;
