function checkArrayNotEmpty(params: any[]): boolean {
  // Check if a is an array
  if (!Array.isArray(params)) {
    return false;
  }

  // Check if the array a has data
  if (params.length === 0) {
    return false;
  }

  return true;
}

export { checkArrayNotEmpty };
