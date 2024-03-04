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

    addSubpartAnswer.addEventListener("click", () => {
        const subPartAnswers = document.getElementById("subpart-answers[" + addSubpartAnswer.getAttribute("data-subpart") + "]");
        const newSubPartAnswer = document.createElement("div");
        newSubPartAnswer.id = "subpart-answer-part[" + (subPartAnswers.childElementCount + 1) + "]";
        newSubPartAnswer.innerHTML = `
            <md-outlined-text-field name="subpart-answer[${subPartAnswers.childElementCount + 1}]" id="subpart-answer[${subPartAnswers.childElementCount + 1}]" label="Answer" type="textarea" data-subpart='${addSubpartAnswer.getAttribute("data-subpart")}' data-subpart-answer-part="${subPartAnswers.childElementCount + 1}" required></md-outlined-text-field>
            <md-outlined-text-field name="marks[${subPartAnswers.childElementCount + 1}]" id="marks[${subPartAnswers.childElementCount + 1}]" label="Marks" required type="number" data-subpart='${addSubpartAnswer.getAttribute("data-subpart")}' data-subpart-answer-part="${subPartAnswers.childElementCount + 1}" step="0.5"></md-outlined-text-field>
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
                <div id="subpart-answer-part[${subPart.childElementCount + 1}]">
                    <md-outlined-text-field name="subpart-answer[1]" id="subpart-answer[1]" label="Answer" type="textarea" data-subpart='${subPart.childElementCount + 1}' data-subpart-answer-part="${subPart.childElementCount + 1}" required></md-outlined-text-field>
                    <md-outlined-text-field name="marks[1]" id="marks[1]" label="Marks" required type="number" data-subpart='${subPart.childElementCount + 1}' data-subpart-answer-part="${subPart.childElementCount + 1}" step="0.5"></md-outlined-text-field>
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
                <md-outlined-text-field name="marks[${subPartAnswers.childElementCount + 1}]" id="marks[${subPartAnswers.childElementCount + 1}]" label="Marks" required type="number" data-subpart='${newSubPart.querySelector("md-outlined-button").getAttribute("data-subpart")}' data-subpart-answer-part="${subPartAnswers.childElementCount + 1}" step="0.5"></md-outlined-text-field>
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

    var questionID = 0;
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
        var fileName = "/assets/json/cbse." + subjectSelect.value + ".json";
        let originalJSON;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", fileName, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                originalJSON = JSON.parse(xhr.responseText);
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
                    let answer = document.getElementById("correct-option").value + ". " + document.getElementById(document.getElementById("correct-option").value.toLowerCase()).value;
                    data.options = {};
                    data.options["a. "] = document.getElementById("a").value;
                    data.options["b. "] = document.getElementById("b").value;
                    data.options["c. "] = document.getElementById("c").value;
                    data.options["d. "] = document.getElementById("d").value;
                    data.answer[answer] = 1;
                }
                else if (hasSubParts.checked) {
                    for (let i = 0; i < subparts.childElementCount ; i++){
                        setTimeout(() => {
                            let subPartQuestion = document.querySelector("#subpart-question\\[" + (i + 1) + "\\]").value;
                            let subPartAnswers = document.getElementById("subpart-answers[" + (i + 1) + "]");
                            let subPartAnswerParts = document.getElementById("subpart-answers[" + (i + 1) + "]").childElementCount;
                            data.subparts[subPartQuestion] = {
                                answer: {}
                            };
                            for (let j = 0; j < subPartAnswerParts; j++) {
                                setTimeout(() => {
                                    let subPartAnswer = subPartAnswers.querySelector("#subpart-answer\\[" + (j + 1) + "\\]").value;
                                    let subPartMarks = subPartAnswers.querySelector("#marks\\[" + (j + 1) + "\\]").value;
                                    data.subparts[subPartQuestion].answer[subPartAnswer] = subPartMarks;
                                });
                            }
                        });
                    }
                }
                else {
                    for (let i = 0; i < answerPartID; i++) {
                        setTimeout(() => {
                            let answer = document.querySelector("#answer\\[" + (i + 1) + "\\]").value;
                            let marks = document.querySelector("#marks\\[" + (i + 1) + "\\]").value;
                            data.answer[answer] = marks;
                        });
                    }
                }
                console.log("Data: ", data)
                originalJSON[questionID] = data;
                console.log(originalJSON);
                // pushAndCreatePR(question, fileName, originalJSON);
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

        await octokit.request('GET /repos/kavishdevar/kavishdevar.github.io/git/ref/heads/main').then(response => {
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
        }).then(response => {
            console.log(response);
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
            content: btoa(unescape(encodeURIComponent(JSON.stringify(json)))),
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }).then(response => {
            alert('Saved Successfully');
        }
        ).catch(error => {
            alert('Error Occured');
        });
        await octokit.request('POST /repos/kavishdevar/kavishdevar.github.io/pulls', {
            owner: 'kavishdevar',
            repo: 'kavishdevar.github.io',
            title: 'New Question at ' + new Date().toISOString().split('T')[0],
            body: 'Please pull these awesome changes in!',
            head: 'kavishdevar:' + ref.split('refs/heads/')[1],
            base: 'main',
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