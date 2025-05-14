function doAsync() {
  return Promise.resolve("value");
}


doAsync().then(value => console.log(value));
