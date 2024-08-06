const handleFindItemInArray = (List: any[], Items: string[]) => {
  return List.map((val, index) => {
    const res = Items?.some((v) => {
      return v == val.value;
    });
    return res ? { ...val } : false;
  }).filter((item) => item);
};

export default handleFindItemInArray;
