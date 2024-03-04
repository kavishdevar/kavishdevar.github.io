import { Octokit } from "https://esm.sh/@octokit/core";

var octokit = new Octokit({
    auth: ''
})

async function hashValue(value) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)).then(h => {
        return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('');
    });
}

octokit = new Octokit({
    auth: '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'
})

setTimeout(() => {
    var fileExists = false;
    var originalContents = '';
    var filepath = '';
    var filename = '';
    const files = document.getElementById('file');
    var content = '';
    var file = files.files[0];

    async function upload() {
        filepath = filePathEl.prefixText + filePathEl.value + filePathEl.suffixText;
        filename = fileNameEl.value;
        if (files.length === 0) {
            alert('No file selected');
            return;
        }
        else if (files.length > 1) {
            alert('Please select only one file');
            return;
        }

        var absoluteFilePath = filepath + filename;
        absoluteFilePath = absoluteFilePath.replace(' ', '-');
        absoluteFilePath = absoluteFilePath.toLowerCase();
        absoluteFilePath = absoluteFilePath.replace('//', '/')
        absoluteFilePath = absoluteFilePath.replace('//', '/')
        absoluteFilePath = absoluteFilePath.replace('//', '/')
        absoluteFilePath = absoluteFilePath.replace('//', '/')

        file = files.files[0];
        var reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            content = e.target.result.split(',')[1];
        }

        await octokit.request('GET /repos/kavishdevar/kavishdevar.github.io/contents' + absoluteFilePath).then(response => {
            sha = response.data.sha;
            originalContents = atob(response.data.content);
            fileExists = true;
        }).catch(error => {
            fileExists = false;
        });
        if (fileExists) {
            if (originalContents.trim() === content.trim()) {
                alert('File already exists, and no changes were made.');
                return;
            }
            alert('Please change the file name and try again');
            return;
        }
        else if (!fileExists) {
            await octokit.request('PUT /repos/kavishdevar/kavishdevar.github.io/contents' + absoluteFilePath, {
                owner: 'kavisdevar',
                repo: 'kavishdevar.github.io',
                path: absoluteFilePath,
                message: 'Add File',
                committer: {
                    name: 'Web Editor',
                    email: 'web.editor@kavishdevar.me'
                },
                content: content,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }).then(response => {
                alert('uploaded Successfully');
            }).catch(error => {
                alert('Error Occured');
            });
        }
    }
    const uploadButton = document.getElementById('upload-button');
    uploadButton.addEventListener('click', upload);

    files.oninput = function () {
        var file = files.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var content = e.target.result;
            console.log(content);
        }
        var type = file.type.split('/')[1];
        if (type==='png' || type==='jpg' || type==='jpeg' || type==='gif' || type==='svg' || type==='webp') {
            filePathEl.suffixText = '/img/';
        }
        else if (type==='mp4' || type==='webm' || type==='ogg') {
            filePathEl.suffixText = '/video/';
        }
        else if (type==='mp3' || type==='wav' || type==='flac' || type==='ogg') {
            filePathEl.suffixText = '/audio/';
        }
        // documents
        else if (type==='pdf' || type==='doc' || type==='docx' || type==='ppt' || type==='pptx' || type==='xls' || type==='xlsx' || type==='txt' || type === 'odt' || type === 'ods' || type === 'odp' || type === 'odg' || type === 'odf' || type === 'odc' || type === 'odi' || type === 'odm' || type === 'odp' || type === '.key' || type === '.pages' || type === '.numbers') {
            filePathEl.suffixText = '/docs/';
        }
        else {
            filePathEl.suffixText = '/other/';
        }
        fileNameEl.value = file.name;
        document.getElementById('upload-icon').style.display = 'none';
        heading.style.marginLeft = '0';
        heading.innerText = file.name;
        filepath = filePathEl.prefixText + filePathEl.value + filePathEl.suffixText;
    }

    const filePathEl = document.getElementById('path');
    const fileNameEl = document.getElementById('file-name');
    const heading = document.getElementById('heading');


    const subjectEl = document.getElementById('subject');
    const sourceEl = document.getElementById('source');
    const setEl = document.getElementById('set');
    const yearEl = document.getElementById('year');

    subjectEl.oninput = function () {
        const subject = subjectEl.value.trim();
        const source = sourceEl.value.trim();
        const set = setEl.value.trim();
        const year = yearEl.value.trim();
        filename = `${subject}/${source}/${set}/${year}/`;
        filePathEl.value = filename;
    }

    sourceEl.oninput = function () {
        const subject = subjectEl.value.trim();
        const source = sourceEl.value.trim();
        const set = setEl.value.trim();
        const year = yearEl.value.trim();
        filename = `${subject}/${source}/${set}/${year}/`;
        filePathEl.value = filename;
    }

    setEl.oninput = function () {
        const subject = subjectEl.value.trim();
        const source = sourceEl.value.trim();
        const set = setEl.value.trim();
        const year = yearEl.value.trim();
        filename = `${subject}/${source}/${set}/${year}/`;
        filePathEl.value = filename;
    }

    yearEl.oninput = function () {
        const subject = subjectEl.value.trim();
        const source = sourceEl.value.trim();
        const set = setEl.value.trim();
        const year = yearEl.value.trim();
        filename = `${subject}/${source}/${set}/${year}/`;
        filePathEl.value = filename;
    }
}, 2000);