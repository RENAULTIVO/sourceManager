# sourceManager
You can use this library to load files only when necessary, avoiding to load files that are not in use.

### How to use

```javascript
loadFile(FILE_PATH);
```

### Promise in loaded event.

```javascript
loadFile('./myfile.js').then(() => {
  /* 
   * This promise is called on file loaded,
   * so after that you can call functions
   * or use data from the loaded file
   */
});
```
### Use example

```javascript
createHome() {
  
  loadFile('HomeStyles.css');
  
  loadFile('Home.js').then(() => {
  
    createHomeScreen();
    
  });

}

```
