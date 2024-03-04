const json = {
    "1": {
        "question": " An organic compound ‘P’ is a constituent of wines. ‘P’ on reacting with acidified K2Cr2O7 forms another compound ‘Q’. When a piece of sodium is added to ‘Q’, a gas ‘R’ evolves which burns with a pop sound when a burning matchstick is brought near it.",
        "subparts": {
            "Give the chemical name of compound P.": {
                "answer": "Ethanol",
                "mark": 1
            },
            "Mention another use of the compound ‘P’ apart from the use mentioned in the question.": {
                "answer": "Industrial solvent/ ingredient of cough syrup/ homeopathic medicine / lab reagent - any one or any other",
                "mark": 1
            },
            "Illustrate with the help of chemical equation the conversion of ‘P’ into ‘Q’.": {
                "answer": "C2H5OH —--acidified K2Cr2O7—---> CH3COOHO",
                "mark": 1
            },
            "Give a balanced equation to depict the reaction of Q with sodium.": {
                "answer": "2Na + 2CH3COOH —-------> 2CH3COONa + H2",
                "mark": 1
            },
            "What happens when ‘P’ is heated with conc. H2SO4 at 443 K, write its chemical equation.": {
                "answer": "Dehydration of ethanol occurs/C2H5OH —--conc.H2SO4—->C2H4 + H2O",
                "mark": 1
            }
        },
        "answer": [],
        "source": "https://cbseacademic.nic.in/web_material/SQP/ClassX_2023_24/Science-PQMS2.pdf"
    },
    "2": {
        "question": "An organic compound ‘X’ is a liquid at room temperature. It is also a very good solvent and has the molecular formula C2 H6 O. Upon oxidation ‘X’ gives ‘Y’. ‘Y’ releases a gas ‘W’ with brisk effervescence on reacting with NaHCO3. X reacts with Y in the presence of conc. H2SO4to give another compound ‘Z’ which has a pleasant smell. Z.",
        "subparts": {
            "Give the chemical name and chemical formula of Y.": {
                "answer": "Ethanoic acid (0.5), CH3COOH (0.5)",
                "mark": 1
            },
            "How will you test for the gas ‘W’?": {
                "answer": "The gas evolved ‘W’ turns Lime water milky",
                "mark": 1
            },
            "Depict the formation Y and Z using chemical equations.": {
                "answer": "C2H5OH—--- Acid.K2Cr2O7—---> CH3COOH\nC2H5OH + CH3COOH —----> CH3COOC2H5 + H2O",
                "mark": 2
            },
            "Name the reaction of formation of ‘Z’.": {
                "answer": "Esterification",
                "mark": 0.5
            },
            "Give any one use of the compound ‘Z’.": {
                "answer": "Any one use - perfumes/cosmetics;",
                "mark": 0.5
            }
        }
    },
    "answer": [],
    "source": "https://cbseacademic.nic.in/web_material/SQP/ClassX_2023_24/Science-PQMS2.pdf"
}

const cardContainer = document.getElementById("card-container");

for (const key in json) {
    const question = json[key].question;
    const content = json[key].subparts || json[key].answer;

    if (question && content) {
        const card = document.createElement("md-filled-card");
        card.className = "card";

        const cardHeader = document.createElement("div");
        cardHeader.className = "card__header";

        const cardHeaderText = document.createElement("div");
        cardHeaderText.className = "card__header-text";

        const cardTitle = document.createElement("div");
        cardTitle.className = "card__title";

        const cardTitleLink = document.createElement("a");
        cardTitleLink.href = "{{post.url | relative_url}}";
        cardTitleLink.textContent = question;

        const cardSubtitle = document.createElement("div");
        cardSubtitle.className = "card__subtitle";
        cardSubtitle.textContent = "Subtitle here"; // Replace with actual subtitle

        const cardSecondary = document.createElement("div");
        cardSecondary.className = "card__secondary body-medium";

        const cardContent = document.createElement("p");
        cardContent.textContent = content;

        cardTitle.appendChild(cardTitleLink);
        cardHeaderText.appendChild(cardTitle);
        cardHeaderText.appendChild(cardSubtitle);
        cardHeader.appendChild(cardHeaderText);
        card.appendChild(cardHeader);
        cardSecondary.appendChild(cardContent);
        card.appendChild(cardSecondary);

        cardContainer.appendChild(card);
    }
}