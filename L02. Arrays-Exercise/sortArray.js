function sortFunc(input = []) {
   return input
      .sort((a, b) => a.localeCompare(b))
      .sort((x, y) => x.length - y.length)
      .join('\n');
}