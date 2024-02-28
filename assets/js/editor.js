import { Octokit } from "https://esm.sh/@octokit/core";
var octokit = new Octokit({
    auth: ''
})
const hashValue = val =>
    crypto.subtle
        .digest('SHA-256', new TextEncoder('utf-8').encode(val))
        .then(h => {
            let hexes = [],
                view = new DataView(h);
            for (let i = 0; i < view.byteLength; i += 4)
                hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
            return hexes.join('');
        });
var token = prompt('Enter your GitHub (Fine-Grained) Token...')
hashValue(
    token
).then(h => {
    console.log(h);
    while (h != 'c52f5ad31cd561cb3ac5b34de0339bdf4715ae4900c853e2bd7b0edad9b1ad48'){
        prompt('Invalid token. Enter your GitHub (Fine-Grained) Token...')
    }
    octokit = new Octokit({
        auth: token
    })
}
)
setTimeout(() => {
    var fileExists = false;
    var sha = ''
    var originalContents = '';

    async function save() {
        const markdownText = document.getElementById('markdown-input').value;
        const title = document.getElementById('title-input').value;
        const subtitle = document.getElementById('subtitle-input').value;
        var text = `---
layout: default
title: ${title}
subtitle: ${subtitle}
titleForNav: ${title}
date: ${new Date().toISOString()}
author: kavish
---
${markdownText}
`;
        if (!title || !subtitle || !markdownText) {
            alert('Please fill all the fields');
            return;
        }

        var filename = new Date().toISOString().split('T')[0] + '-' + title.toLowerCase().split(' ').join('-') + '.md';

        await octokit.request('GET /repos/kavishdevar/kavishdevar.github.io/contents/_posts/' + filename).then(response => {
            sha = response.data.sha;
            originalContents = atob(response.data.content);
            fileExists = true;
        }).catch(error => {
            fileExists = false;
        });

        if (fileExists) {
            // remove lines that are not part of the content
            var originalContents2 = originalContents.split('---').slice(2).join('---');
            var text2 = text.split('---').slice(2).join('---');
            if (originalContents2.trim() === text2.trim()) {
                alert('File already exists, and no changes were made.');
                return;
            }
            var overwrite = confirm('Do you want to overwrite the file?');
            if (overwrite) {
                var editText = 'edited: ' + new Date().toISOString();
                text = `---\n${editText}${text.split('---')[1]}---` + text2;
                await octokit.request('PUT /repos/kavishdevar/kavishdevar.github.io/contents/_posts/' + filename, {
                    owner: 'kavisdevar',
                    repo: 'kavishdevar',
                    path: '/_posts/' + filename,
                    message: 'Add File',
                    sha: sha,
                    committer: {
                        name: 'Web Editor',
                        email: 'web.editor@kavishdevar.me'
                    },
                    content: btoa(text),
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                }).then(response => {
                    alert('Saved Successfully');
                }).catch(error => {
                    console.log(error);
                    alert('Error Occured');
                });
            }
            else {
                alert('Please change the title and try again');
            }
            return;
        }
        else if (!fileExists) {
            await octokit.request('PUT /repos/kavishdevar/kavishdevar.github.io/contents/_posts/' + filename, {
                owner: 'kavisdevar',
                repo: 'kavishdevar',
                path: '/_posts/' + filename,
                message: 'Add File',
                committer: {
                    name: 'Web Editor',
                    email: 'web.editor@kavishdevar.me'
                },
                content: btoa(text),
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }).then(response => {
                alert('Saved Successfully');
            }).catch(error => {
                alert('Error Occured');
            });
        }
    }
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', save);
    const markdownInput = document.getElementById('markdown-input');
    const markdownPreview = document.getElementById('markdown-preview');
    const titleInput = document.getElementById('title-input');
    const subtitleInput = document.getElementById('subtitle-input');
    const cardTitle = document.getElementById('card-title');
    const cardSubtitle = document.getElementById('card-subtitle');

    const valuesUpdated = () => {
        cardTitle.innerHTML = titleInput.value;
        cardSubtitle.innerHTML = subtitleInput.value;
        const markdownText = markdownInput.value;
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdownText).replace('h6', 'h7').replace('h5', 'h6').replace('h4', 'h5').replace('h3', 'h4').replace('h2', 'h3').replace('h1', 'h2');
        markdownPreview.innerHTML = html;
        localStorage.setItem('markdown', markdownText);
        localStorage.setItem('title', titleInput.value);
        localStorage.setItem('subtitle', subtitleInput.value);
    };
    const getValues = () => {
        const markdownText = localStorage.getItem('markdown');
        const title = localStorage.getItem('title');
        const subtitle = localStorage.getItem('subtitle');
        if (markdownText) {
            markdownInput.value = markdownText;
            titleInput.value = title;
            subtitleInput.value = subtitle;
            valuesUpdated();
        }
    }
    // Add event listener to update the preview whenever the input changes
    markdownInput.addEventListener('input', valuesUpdated);
    titleInput.addEventListener('input', valuesUpdated);
    subtitleInput.addEventListener('input', valuesUpdated);
    // Initial preview update
    getValues()
}, 2000);