const commands = [
    "help",
    "about",
    "resume",
    "projects",
    "contact",
    "clear",
]

const commandExplanation = [
    "some general information about me",
    "a basic version of my resume",
    "what I am currently working on/have worked on",
    "contact information",
    "clears the terminal",
]

const aboutText = [
    "br",
    "Hey, my name is Logan Caraway!",
    "br",
    "I'm a software developer based in Knoxville, TN",
    "br",
    "I'm very passionate about software development and problem-solving, and I am always looking for a chance to continue\
    learning.",
    "br",
    "Outside of that, I love the outdoors and hiking, cooking, and playing video games.",
    "br",
];

/* This is not the prettiest way to do it, but b/c it is dynamic it is a bit janky */

const resumeTextOne = [
    "br",
    "You can find an up-to-date version of my resume on this site's repository.",
    "br",
    "However, here is the gist of it:",
    "br",
    "Education:",
    "br",
    "I attended the University of Tennessee from August 2023 to December 2025.",
    "Previously, I did two years at Pellissippi State Community College.",
    "I graduated magna cum laude with a GPA of 3.81, with a degree in computer science.",
    "br",
    "Skills:",
    "br",
];

const resumeSpans = [
    "Programming Languages:",
    "Systems & Tools:",
    "Frameworks:",
    "Concepts:",
];

const resumeTextTwo = [
    "C++/C, JavaScript/TypeScript, HTML/CSS,Rust, C#, Python",
    "Unix, Linux (Kali/Ubuntu), Git/GitHub",
    "React & Next.js (primarily Next.js)",
    "Systems Programming, Compiler Design",
];

const resumeTextThree = [
    "For my full experience, please check my resume.",
    "https://youtu.be/Dn_6csgK06A",
    "https://youtu.be/neo8tPp__Lg",
];

const projectsText = [
    ""
];

function scrollToBottom() {
    document.getElementById("scroll-anchor").scrollIntoView({behavior: "instant"});
}

function genHelp() {
    terminalContent.appendChild(document.createElement("br"));

    const ul = document.createElement("ul");
    let index = 0;

    commands.slice(1).forEach(command => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        
        span.textContent = command;
        span.style.color = '#00ff9c';

        const text = document.createTextNode(" - " + commandExplanation[index]);
        index++;

        li.appendChild(span);
        li.appendChild(text);
        ul.appendChild(li);
    });

    terminalContent.appendChild(ul);
    terminalContent.appendChild(document.createElement("br"));
}

function genAbout() {
    aboutText.forEach(line => {
        if (line === "br") {
            terminalContent.appendChild(document.createElement("br")); 
        } else {
            const p = document.createElement("p");
            p.textContent = line;
            terminalContent.appendChild(p);
        }
    });
}

function genContact() {
    const ul = document.createElement("ul");
    let index = 0;

    terminalContent.appendChild(document.createElement("br")); 
    const lis = [
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li"),
    ];

    const spans = [
        document.createElement("span"),
        document.createElement("span"),
        document.createElement("span"),
    ];

    const spanTexts = [
        "LinkedIn:",
        "Email:",
        "Phone Number:",
    ];

    const texts = [
        document.createTextNode(" " + "linkedin.com/in/logan-caraway"),
        document.createTextNode(" " + "logan.n.caraway@gmail.com"),
        document.createTextNode(" " + "865-310-5895"),
    ];

    lis.forEach(li => {
        spans[index].textContent = spanTexts[index];
        spans[index].style.color = '#00ff9c';
        lis[index].appendChild(spans[index]);
        lis[index].appendChild(texts[index]);
        ul.appendChild(li);
        index++;
    });

    terminalContent.appendChild(ul);
    terminalContent.appendChild(document.createElement("br")); 
}


function genProjects() {
    terminalContent.appendChild(document.createElement("br"));

    const p1 = document.createElement("p");
    p1.textContent = "Currently, I am working on a web application to help Pokemon draft league players prepare for matches.";
    terminalContent.appendChild(p1);
    terminalContent.appendChild(document.createElement("br"));

    const p2 = document.createElement("p");
    const link1 = document.createElement("a");
    link1.textContent = "https://github.com/logannick02/pokeprep/blob/main/README.md";
    link1.href = "https://github.com/logannick02/pokeprep/blob/main/README.md";
    link1.style.color = "inherit"; 
    link1.style.textDecoration = "underline";

    p2.appendChild(link1);
    terminalContent.appendChild(p2);
    terminalContent.appendChild(document.createElement("br"));
}

function genResume() {
    // iterate through the first section

    resumeTextOne.forEach(line => {
        if (line === "br") {
            terminalContent.appendChild(document.createElement("br"));
        } else {
            const p = document.createElement("p");
            p.textContent = line;
            
            if (p.textContent === 'Education:' || p.textContent === 'Skills:') p.classList.add('green');
            terminalContent.appendChild(p);
        }
    });

    // now second
    const ul = document.createElement("ul");
    let index = 0; 

    resumeTextTwo.forEach(line => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = resumeSpans[index];
        index++;
        span.style.color = '#FCEEA7';

        const text = document.createTextNode(" " + line);

        li.appendChild(span);
        li.appendChild(text);

        ul.appendChild(li);
    });

    terminalContent.appendChild(ul);
    terminalContent.appendChild(document.createElement("br")); 

    const p1 = document.createElement("p");

    p1.textContent = "Experience:"
    p1.classList.add("green");
    terminalContent.appendChild(p1);
    terminalContent.appendChild(document.createElement("br")); 

    const p2 = document.createElement("p");

    p2.textContent = resumeTextThree[0];
    terminalContent.appendChild(p2);
    terminalContent.appendChild(document.createElement("br")); 

    const ul2 = document.createElement("ul");

    // first video
    const li2 = document.createElement("li");

    const span2 = document.createElement("span");
    span2.textContent = "Threaded Chat Server Demo: ";
    span2.classList.add('yellow');

    const link1 = document.createElement("a");
    link1.textContent = resumeTextThree[1];
    link1.href = resumeTextThree[1];
    link1.style.color = "inherit"; 
    link1.style.textDecoration = "underline";

    li2.appendChild(span2);
    li2.appendChild(document.createTextNode(" "));
    li2.appendChild(link1);

    ul2.appendChild(li2);

    // second video
    const li3 = document.createElement("li");

    const span3 = document.createElement("span");
    span3.textContent = "Candidate Insight Demo: ";
    span3.classList.add('yellow');

    const link2 = document.createElement("a");
    link2.textContent = resumeTextThree[2];
    link2.href = resumeTextThree[2];
    link2.style.color = "inherit";
    link2.style.textDecoration = "underline";

    li3.appendChild(span3);
    li3.appendChild(document.createTextNode(" "));
    li3.appendChild(link2);

    ul2.appendChild(li3);

    terminalContent.appendChild(ul2);
    terminalContent.appendChild(document.createElement("br"));
}

function handleEnter() {
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.textContent = 'guest@lshell:~$ ';
    span1.style.color = '#5555ff';
    span2.textContent = ' ' + output.textContent;
    span2.style.color = '#FCEEA7';
    
    terminalContent.appendChild(span1);
    terminalContent.appendChild(span2);
    terminalContent.appendChild(document.createElement("br"));

    if (commands.includes(output.textContent.toLowerCase().trim())) {
        switch(output.textContent.toLowerCase()) {
            case 'help':
                genHelp();
                break;
            case 'about':
                genAbout();
                break;
            case 'resume':
                genResume();
                break;
            case 'projects':
                genProjects();
                break;
            case 'contact':
                genContact();
                break;
            case 'clear':
                terminalContent.innerHTML = "";
                break;
        }
    } else {
        const errorText = document.createElement("p");
        errorText.textContent = "Invalid command. Type 'help' for a list of valid commands.";
        errorText.classList.add('red');
        terminalContent.appendChild(errorText);
        terminalContent.appendChild(document.createElement("br"));
    }

    output.textContent = "";
    input.value = "";
    scrollToBottom();
}

const input = document.getElementById('hidden');
const output = document.getElementById('typed-text');
const terminalContent = document.getElementById('terminal-output');

input.value = "";
output.textContent = "";

// listener for entire site
document.addEventListener('keydown', (event) => {
    scrollToBottom();

    const focus = document.activeElement === input;

    if (!focus) {
        input.focus();

        /*
        if (event.key === 'Enter') {
            handleEnter();
        }

        if (event.metaKey || event.altKey) return;

        if (event.key.length === 1) {
            input.value += event.key;
            output.textContent = input.value;
        }

        if (event.key === "Backspace") {
            input.value = input.value.slice(0, -1);
            output.textContent = input.value;
        }
        */
    }
});

// event listener for user input
input.addEventListener('input', (event) => {
    output.textContent = event.target.value;
    scrollToBottom();
});

// event listener for checking enter
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') handleEnter();
});