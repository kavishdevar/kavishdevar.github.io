import { Octokit } from "https://esm.sh/@octokit/core";
setTimeout(() => {
    const typeSelect = document.getElementById("type-select");
    const subjectSelect = document.getElementById("subject-select");
    const subjective = document.getElementById("subjective");
    const objective = document.getElementById("objective");
    const submit = document.getElementById("submit");
    const hasSubParts = document.getElementById("has-subparts");
    const addSubPart = document.getElementById("add-subpart");
    const addSubpartAnswer = document.getElementById("add-subpart-answer-part");
    const questionSource = document.getElementById("question-source");
    const answerSource = document.getElementById("answer-source");

    if (localStorage.getItem("question-source")) { questionSource.value = localStorage.getItem("question-source"); }
    if (localStorage.getItem("answer-source")) { answerSource.value = localStorage.getItem("answer-source"); }
    if (localStorage.getItem("subject")) { subjectSelect.value = localStorage.getItem("subject"); }
    questionSource.addEventListener("change", () => { localStorage.setItem("question-source", questionSource.value); });
    answerSource.addEventListener("change", () => { localStorage.setItem("answer-source", answerSource.value); });
    subjectSelect.addEventListener("change", () => { localStorage.setItem("subject", subjectSelect.value); });

    addSubpartAnswer.addEventListener("click", () => {
        const subPartAnswers = document.getElementById("subpart-answers[" + addSubpartAnswer.getAttribute("data-subpart") + "]");
        const newSubPartAnswer = document.createElement("div");
        newSubPartAnswer.id = "subpart-answer-part[" + (subPartAnswers.childElementCount + 1) + "]";
        newSubPartAnswer.innerHTML = `
            <md-outlined-text-field name="subpart-answer[${subPartAnswers.childElementCount + 1}]" id="subpart-answer[${subPartAnswers.childElementCount + 1}]" label="Answer" type="textarea" data-subpart='${addSubpartAnswer.getAttribute("data-subpart")}' data-subpart-answer-part="${subPartAnswers.childElementCount + 1}" required></md-outlined-text-field>
            <md-outlined-text-field name="subpart-mark[${subPartAnswers.childElementCount + 1}]" id="subpart-mark[${subPartAnswers.childElementCount + 1}]" label="Marks" required type="number" data-subpart='${addSubpartAnswer.getAttribute("data-subpart")}' data-subpart-answer-part="${subPartAnswers.childElementCount + 1}" step="0.5"></md-outlined-text-field>
        `;
        subPartAnswers.appendChild(newSubPartAnswer);
    });

    addSubPart.addEventListener("click", () => {
        const subPart = document.getElementById("subparts");
        const newSubPart = document.createElement("div");
        newSubPart.id = "subpart[" + (subPart.childElementCount + 1) + "]";

        newSubPart.innerHTML = `
            <md-outlined-text-field name="subpart-question[${subPart.childElementCount + 1}]" id="subpart-question[${subPart.childElementCount + 1}]" label="Subpart Question" required></md-outlined-text-field>
            <div id="subpart-answers[${subPart.childElementCount + 1}]" data-subpart="${subPart.childElementCount + 1}">
                <div id="subpart-answer-part[1]">
                    <md-outlined-text-field name="subpart-answer[1]" id="subpart-answer[1]" label="Answer" type="textarea" data-subpart='${subPart.childElementCount + 1}' data-subpart-answer-part="${subPart.childElementCount + 1}" required></md-outlined-text-field>
                    <md-outlined-text-field name="subpart-mark[1]" id="subpart-mark[1]" label="Marks" required type="number" data-subpart='${subPart.childElementCount + 1}' data-subpart-answer-part="${subPart.childElementCount + 1}" step="0.5"></md-outlined-text-field>
                </div>
            </div>
            <md-outlined-button type="button" id="add-subpart-answer-part" data-subpart="${subPart.childElementCount + 1}">Add Answer Part</md-outlined-button>
        `;

        subPart.appendChild(newSubPart);

        newSubPart.querySelector("md-outlined-button").addEventListener("click", () => {
            const subPartAnswers = document.getElementById("subpart-answers[" + newSubPart.querySelector("md-outlined-button").getAttribute("data-subpart") + "]");
            const newSubPartAnswer = document.createElement("div");
            newSubPartAnswer.id = "subpart-answer-part[" + (subPartAnswers.childElementCount + 1) + "]";
            newSubPartAnswer.innerHTML = `
                <md-outlined-text-field name="subpart-answer[${newSubPart.querySelector("md-outlined-button").getAttribute("data-subpart")}]" id="subpart-answer[${newSubPart.querySelector("md-outlined-button").getAttribute("data-subpart")}]" label="Answer" type="textarea" data-subpart='${newSubPart.querySelector("md-outlined-button").getAttribute("data-subpart")}' data-subpart-answer-part="${subPartAnswers.childElementCount + 1}" required></md-outlined-text-field>
                <md-outlined-text-field name="subpart-mark[${subPartAnswers.childElementCount + 1}]" id="subpart-mark[${subPartAnswers.childElementCount + 1}]" label="Marks" required type="number" data-subpart='${newSubPart.querySelector("md-outlined-button").getAttribute("data-subpart")}' data-subpart-answer-part="${subPartAnswers.childElementCount + 1}" step="0.5"></md-outlined-text-field>
            `;
            subPartAnswers.appendChild(newSubPartAnswer);
        });
    });


    hasSubParts.addEventListener("change", () => {
        if (hasSubParts.checked) {
            subjective.style.display = "none";
            objective.style.display = "none";
            document.getElementById("subparts-form").style.display = "block";
        } else {
            if (typeSelect.value === "mcq") {
                subjective.style.display = "none";
                objective.style.display = "block";
            }
            else {
                subjective.style.display = "block";
                objective.style.display = "none";
            }
            document.getElementById("subparts-form").style.display = "none";

        }
    });

    let questionID;
    var answerPartID = 1;

    typeSelect.addEventListener("change", () => {
        if (typeSelect.value === "mcq") {
            subjective.style.display = "none";
            objective.style.display = "block";
            hasSubParts.checked = false;
            hasSubParts.disabled = true;
            document.getElementById("subparts-form").style.display = "none";
        } else {
            objective.style.display = "none";
            hasSubParts.disabled = false;
            if (hasSubParts.checked) {
                document.getElementById("subparts-form").style.display = "block";
                subjective.style.display = "none";
            }
            else {
                subjective.style.display = "block";
                document.getElementById("subparts-form").style.display = "none";

            }
        }
    });

    submit.addEventListener("click", async () => {
        if (!document.getElementById("question").reportValidity() || !document.getElementById("type-select").reportValidity() || !document.getElementById("subject-select").reportValidity() || !document.getElementById("question-source").reportValidity() || !document.getElementById("answer-source").reportValidity()) {
            return;
        }
        if (typeSelect.value === "mcq") {
            if (!document.getElementById("a").reportValidity() || !document.getElementById("b").reportValidity() || !document.getElementById("c").reportValidity() || !document.getElementById("d").reportValidity() || !document.getElementById("correct-option").reportValidity()) {
                return;
            }
        }
        else if (hasSubParts.checked) {
            var mdTextFields = subparts.querySelectorAll("md-outlined-text-field");
            for (let i = 0; i < mdTextFields.length; i++) {
                if (!mdTextFields[i].reportValidity()) {
                    return;
                }
            }
        }
        else {
            for (let i = 0; i < answerPartID; i++) {
                if (!document.querySelector("#answer\\[" + (i + 1) + "\\]").reportValidity() || !document.querySelector("#marks\\[" + (i + 1) + "\\]").reportValidity()) {
                    return;
                }
            }
        }


        var fileName = "/assets/json/cbse." + subjectSelect.value + ".json";
        let originalJSON;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", fileName, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                originalJSON = JSON.parse(xhr.responseText);
                questionID = Object.keys(originalJSON).length;
                if (originalJSON[questionID]) {
                    questionID++;
                }
                let question = document.getElementById("question").value;
                let data = {
                    question: question,
                    type: typeSelect.value,
                    answer: {},
                    subparts: {},
                    "question-source": questionSource.value,
                    "answer-source": answerSource.value,
                };
                if (typeSelect.value === "mcq") {
                    let answer = document.getElementById("correct-option").value + ". " + document.getElementById(document.getElementById("correct-option").value.toLowerCase()).value.replace('"', "'");
                    data.options = {};
                    data.options["a. "] = document.getElementById("a").value.replace('"', "'");
                    data.options["b. "] = document.getElementById("b").value.replace('"', "'");
                    data.options["c. "] = document.getElementById("c").value.replace('"', "'");
                    data.options["d. "] = document.getElementById("d").value.replace('"', "'");
                    data.answer[answer] = 1;
                }
                else if (hasSubParts.checked) {
                    for (let i = 0; i < subparts.childElementCount; i++) {
                        setTimeout(() => {
                            let subPartQuestion = document.querySelector("#subpart-question\\[" + (i + 1) + "\\]").value.replace('"', "'");
                            let subPartAnswers = document.getElementById("subpart-answers[" + (i + 1) + "]");
                            data.subparts[subPartQuestion] = {
                                answer: {}
                            };
                            subPartAnswers.querySelectorAll(`md-outlined-text-field[id^=subpart-answer]`).forEach((element) => {
                                let answer = element.value.replace('"', "'");
                                let marks = document.querySelectorAll(`[id^=subpart-mark\\[][data-subpart-answer-part='${element.getAttribute('data-subpart-answer-part')}'][data-subpart='${element.getAttribute('data-subpart')}']`)[0].value;
                                data.subparts[subPartQuestion].answer[answer] = marks;
                            });
                        });
                    }
                }
                else {
                    for (let i = 0; i < answerPartID; i++) {
                        setTimeout(() => {
                            let answer = document.querySelector("#answer\\[" + (i + 1) + "\\]").value.replace('"', "'");
                            let marks = document.querySelector("#marks\\[" + (i + 1) + "\\]").value;
                            data.answer[answer] = marks;
                        });
                    }
                }
                originalJSON[questionID] = data;

                pushAndCreatePR(question, fileName, originalJSON);
            }
        }
    });

    async function pushAndCreatePR(
        question,
        fileName,
        json
    ) {
        var octokit = new Octokit({
            auth: "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"
        });
        let branchSha;

        await octokit.request('GET /repos/kavishdevar/kavishdevar.github.io/git/ref/heads/dev').then(response => {
            branchSha = response.data.object.sha;
        }).catch(error => {
            console.log(error);
        });

        let ref = 'refs/heads/' + new Date().toISOString().replaceAll(':', '-').split('.')[0] + '-' + question.toLowerCase().slice(0, 10).split(' ').join('-') + '-add-question';

        await octokit.request('POST /repos/kavishdevar/kavishdevar.github.io/git/refs', {
            owner: 'kavishdevar',
            repo: 'kavishdevar.github.io',
            ref: ref,
            sha: branchSha
        }).catch(error => {
            alert('Error Occured');
            console.log(error);
        });

        let sha;

        await octokit.request('GET /repos/kavishdevar/kavishdevar.github.io/contents' + fileName,
            {
                owner: 'kavishdevar',
                repo: 'kavishdevar.github.io',
                ref: ref.split('refs/heads/')[1],
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }
        ).then(response => {
            sha = response.data.sha;
        }).catch(error => {
            console.log(error);
        });
        await octokit.request('PUT /repos/kavishdevar/kavishdevar.github.io/contents' + fileName, {
            owner: 'kavishdevar',
            repo: 'kavishdevar.github.io',
            path: fileName,
            message: 'Add Question',
            sha: sha,
            branch: ref.split('refs/heads/')[1],
            committer: {
                name: 'CBSE',
                email: 'CBSE@kavishdevar.me',
            },
            content: btoa(unescape(encodeURIComponent(JSON.stringify(json, null, "\t")))),
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }).then(response => {
            alertMd("Question Added Successfully", "Question Added Successfully. Reload to add more.", "success");
        }
        ).catch(error => {
            alert('Error Occured');
        });
        await octokit.request('POST /repos/kavishdevar/kavishdevar.github.io/pulls', {
            owner: 'kavishdevar',
            repo: 'kavishdevar.github.io',
            title: 'New Question on ' + new Date().toISOString().split('T')[0] + 'Subject: ' + subjectSelect.value,
            body: 'Question Title: ' + question + '\nQuestion Type: ' + typeSelect.value + '\nQuestion Source: ' + questionSource.value + '\nAnswer Source: ' + answerSource.value + '\nSubject: ' + subjectSelect.value + '\n' + '```JSON.stringify(json[questionID], null, "\t")```',
            head: 'kavishdevar:' + ref.split('refs/heads/')[1],
            base: 'dev',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }

    document.getElementById("subject-select").addEventListener("change", () => {
        const subject = document.getElementById("subject-select").value;
        var fileName = "/assets/json/cbse." + subject + ".json";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", fileName, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                questionID = Object.keys(json).length + 1;
            }
        }
    });
    document.getElementById("add-answer-part").addEventListener("click", () => {
        const answerPart = document.getElementById("answers");
        const newAnswerPart = document.createElement("div");
        answerPartID++;
        newAnswerPart.id = "answer-part[" + answerPartID + "]";
        newAnswerPart.innerHTML = `
            <md-outlined-text-field name="answer[${answerPartID}]" id="answer[${answerPartID}]" label="Answer" type="textarea" required></md-outlined-text-field>
            <md-outlined-text-field name="marks[${answerPartID}]" id="marks[${answerPartID}]" label="Marks" required type="number" step="0.5"></md-outlined-text-field>
        `;
        answerPart.appendChild(newAnswerPart);
    });
}, 2000);