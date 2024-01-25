export const parseLineBreaks = (str: string) => {
  const regex = /(?:\\r\\n|\\r|\\n)/g;

  return str.split(regex).map((s) => s.trim());
};
