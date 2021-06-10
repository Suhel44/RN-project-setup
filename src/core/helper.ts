export function updateObject(oldObject : any, updatedValues : any) {
  return {
    ...oldObject,
    ...updatedValues,
  };
}