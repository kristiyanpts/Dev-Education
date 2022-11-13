function Main(path) {
    let fileName, fileExtension;
    let file = path.split('\\').pop();
    let lastComma = file.lastIndexOf('.');
    fileName = file.substring(0, lastComma);
    fileExtension = file.substring(lastComma + 1, lastComma + file.length - 1);
    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}

Main('C:\\Internal\\training-internal\\Template.pptx')