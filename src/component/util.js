export function DownloadBlobMusic(data, format) {
    const a = document.createElement('a');
    a.href = data.file;
    switch (format) {
        case "1":
            a.download = data.title + "." + data.ext;
            break;
        default:
        case "2":
            a.download = data.artist + " - " + data.title + "." + data.ext;
            break;
        case "3":
            a.download = data.title + " - " + data.artist + "." + data.ext;
            break;
    }
    document.body.append(a);
    a.click();
    a.remove();
}

export function RemoveBlobMusic(data) {
    URL.revokeObjectURL(data.file);
    URL.revokeObjectURL(data.picture);
}
