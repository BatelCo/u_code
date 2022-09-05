function doX() {
    const domElement = document.querySelector('.foo');
    const inputElement = domElement as HTMLInputElement;

    console.log(inputElement.value);
}