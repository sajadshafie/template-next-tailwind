type Object = { [key: string]: any };

// * shorter and slower version
// export function findInObjectWithKey(
//   obj: Object,
//   keyPath: string,
// ): Object | null {
//   console.log('keyPath.split("."): ', keyPath.split("."));
//   return keyPath.split(".").reduce((acc, key) => acc && acc[key], obj) || null;
// }

// * Cleander, faster and understandable version
export default function findInObjectWithKey(
  obj: Object,
  keyPath: string,
): Object | null {
  const keysArray = keyPath.split(".");
  let value = obj;

  for (let key of keysArray) {
    value = value[key];

    if (value === undefined) {
      return null;
    }
  }

  return value;
}
