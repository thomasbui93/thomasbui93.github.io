export const convertToDict = (files) => {
  const kv = new Map();
  files.map(node => kv.set(node.node.name, node.node));
  return kv;
}
