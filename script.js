
let sliderCopy = document.querySelector(".slider").cloneNode(true);

let sliderContainer = document.querySelector(".sliderContainer");

sliderContainer.appendChild(sliderCopy);

let projectsData = [
    {
        title: "Quwad",
        clientName: "Personal",
        intro: "Application for organizing and registering in tournaments.",
        description: "A cloud app to organize tournaments and users can register in the tournaments.",
        isGitHub: true,
        gitFrontEndRepository: "https://github.com/thekuvel/Quwad_Front_End",
        gitBackEndRepository:"https://github.com/thekuvel/Quwad_Front_End",
        isHosted: true,
        siteLink: "https://quwad.com",
        projectImage: "./assets/images/Quwad_1_TournamentList.png"
    },
    {
        title: "BuyHomeNest",
        clientName: "GUVI",
        intro: "Real estate listing platform.",
        description: "A platform to create, list and connect with properties. Agents can communicate with users, create other agents and monitor app.",
        isGitHub: true,
        gitFrontEndRepository: "https://github.com/thekuvel/BuyHomeNest-Kumaravel-FrontEnd",
        gitBackEndRepository:"https://github.com/thekuvel/BuyHomeNest-Kumaravel-BackEnd",
        isHosted: true,
        siteLink: "https://buyhomenest.netlify.app",
        projectImage: "./assets/images/BuyHomeNest_1_PropertyList.png"
    },
    // {
    //     title: "Aukdon",
    //     clientName: "Personal",
    //     intro: "A website for a startup.",
    //     description: "A cloud application development company. Developing minimal reliable and scalable applications.",
    //     isGitHub: true,
    //     gitFrontEndRepository: "https://github.com/Aukdon/aukdon.com",
    //     gitBackEndRepository:"https://github.com/Aukdon/aukdon.com",
    //     isHosted: true,
    //     siteLink: "https://www.aukdon.com",
    //     projectImage: "./assets/images/CareerDA_1_ListOfJobs.png"
    // },
    {
        title: "Careerda",
        clientName: "Personal",
        intro: "A job search application.",
        description: "Application for employers to post jobs. Leveragin API's to automatically post jobs in all platforms.",
        isGitHub: true,
        gitFrontEndRepository: "https://github.com/thekuvel/CareerDA_Frontend",
        gitBackEndRepository:"https://github.com/thekuvel/CareerDA_Backend",
        isHosted: true,
        siteLink: "https://careerda.netlify.app/",
        projectImage: "./assets/images/CareerDA_1_ListOfJobs.png"
    },
    {
        title: "ToDo application",
        clientName: "Personal",
        intro: "A simple todo task application.",
        description: "To do task application, for quick task tracking.",
        isGitHub: true,
        gitFrontEndRepository: "https://github.com/thekuvel/ToDo_Frontend",
        gitBackEndRepository:"https://github.com/thekuvel/ToDo_Backend",
        isHosted: true,
        siteLink: "https://todoappbykuvel.netlify.app/",
        projectImage: "./assets/images/ToDo_1_TaskList.png"
    }
]

cardColor = ["#E7F3F8","#FDEBEC", "#EDF3EC", "#FBF3DB"];

let projectsContainer = document.querySelector(".projectsContainer");

projectsData.map((data, index)=>{

    let siteLink = `
    <a href="${data.siteLink}" target="_blank">
        <button class="text-black border border-[#D9D9D9] rounded p-2 hover:bg-[#6946FA] hover:text-[#ffffff]">
            Deployed link
        </button>
    </a>
    `
    let gitFrontEndLink = `
    <a href="${data.gitFrontEndRepository}" target="_blank">
        <button class="text-black border border-[#D9D9D9] rounded p-2 hover:bg-[#6946FA] hover:text-[#ffffff]">
            Frontend Code
        </button>
    </a>
    `
    let gitBackEndLink = `
    <a href="${data.gitBackEndRepository}" target="_blank">
        <button class="text-black border border-[#D9D9D9] rounded p-2 hover:bg-[#6946FA] hover:text-[#ffffff]">
            Backend Code
        </button>
    </a>
    `

    if(index >= cardColor.length){
        index = index - cardColor.length
    }

    let projectCard = `
    <div class="grid gap-5 bg-[${cardColor[index]}] p-5 drop-shadow-md">
       <p>${data.title} - ${data.clientName}</p>
       <p class="text-black/75">
           ${data.intro} <br>
           ${data.description}
       </p>
       <div class="flex justify-center drop-shadow-md">
            <img class="max-w-[350px]" src="${data.projectImage}" alt="List of jobs image.">
        </div>
       <div class="grid justify-center lg:flex gap-2">
        ${data.isGitHub ? gitFrontEndLink : ""}
        ${data.isGitHub ? gitBackEndLink : ""}
        ${data.isHosted ? siteLink : ""}
        </div>
    </div>
    `

    projectsContainer.innerHTML+=projectCard;

 })


// SKILLS

let skillsContainer = document.querySelector(".skillsContainer");

let skillsArray =[
    {
        title: "UI Design",
        description: `
        Use design tools like Figma to craft user-friendly interfaces and integrate them seamlessly into full-stack projects. <br/>
        Build visually appealing, functional layouts with a focus on intuitive navigation and engaging user experiences.`,
        skillList : ["Figma", "Canva", "High fedility design"]
    },
    {
        title: "Front End development",
        description: `
        Builds dynamic, responsive user interfaces with React, delivering seamless and engaging user experiences. <br/>
        Leverages state management tools like Redux and Context API to efficiently manage application data and user interactions. <br/>
        Enhances performance through reusable, modular components.`,
        skillList : ["React JS", "Redux", "Context", "vite"]
    },
    {
        title: "Back End development",
        description: `
        Develops robust server-side logic and APIs using Node.js and Express.js. <br/>
        Utilizes Mongoose for efficient interaction with MongoDB. <br/>
        Enhances application performance through local and session storage. <br/>
        Strengthens security by safeguarding APIs with JWT authentication and bcrypt hashing. <br/>`,
        skillList : ["Express JS", "Node JS", "JWT", "bcrypt", "socket.io", "Axios"]
    },
    {
        title: "Database",
        description: `
        Experienced in using MongoDB to manage data for large-scale applications. <br/>
        Proficient with MySQL for structured, relational database solutions.`,
        skillList : ["MongoDB", "Atlas", "Mongoose", "MySQL"]
    },
    {
        title: "Cloud",
        description: `
        Deploys and manages scalable applications using platforms like Netlify and Render. <br/>
        Utilizes AWS services such as EC2 for computing and S3 for storage solutions.`,
        skillList : ["AWS", "IBM Cloud"]
    },
]

skillsArray.map((data, index) => {    

    let tagList = data.skillList.map(skillName=>{
        let tag = `<p class="p-2 bg-blue-500 border-none rounded text-white">${skillName}</p>`        
        // console.log(tag);
        return tag
    })
    
    let skillCard = `
    <div class="dropDownCard bg-white p-5 border-b-[1px] border-grey">
        <div class="flex justify-center sm:justify-start items-center gap-x-5">
            <p class="font-semibold">${data.title}</p>
            <img class="hidden sm:block max-w-[16px]" src="/assets/icons/dropDown.png">
            
        </div>
        
        <div class="text-black/75 description dropDownElement ${(index === 0) ? "block" : "hidden"}">
            <p>${data.description}</p>
            <div class="mt-5 grid grid-cols-2 lg:flex gap-5">
            ${tagList.join("")}
            </div>
        </div>
    </div>
    `
    
    skillsContainer.innerHTML += skillCard

})


//  CERTIFICATION CONTAINER
let certificationsContainer = document.querySelector(".certificationsContainer");

certificationsArray = [
    {
        title: "Full Stack Development",
        provider: "GUVI and IIT Madras",
        year: "2024",
    },
    {
        title: "AWS Cloud Practitioner",
        provider: "Amazon",
        year: "2023",
    },
    {
        title: "IBM Infrastructure",
        provider: "IBM",
        year: "2021",
    },
    {
        title: "Modern application development",
        provider: "IIT Madras",
        year: "2017",
    },
]


certificationsArray.map( (data, index) => {

    if(index >= cardColor.length){
        index = index - cardColor.length
    }

    let certificationCard = `
    <div class="p-5 bg-[${cardColor[index]}] border-none rounded-lg drop-shadow-md">
        <p><span class="font-semibold">Title:</span> ${data.title}</p>
        <p><span class="font-semibold">Provider:</span> ${data.provider}</p>
        <p><span class="font-semibold">Year:</span> ${data.year}</p>
    </div>
    `
    certificationsContainer.innerHTML += certificationCard
})


// Skill - Drop down
let dropDownCards = document.querySelectorAll(".dropDownCard");

dropDownCards.forEach(card=>{
    card.addEventListener("click",()=>{
        
        let dropDownElement = card.querySelector(".dropDownElement"); 
        if(dropDownElement.classList.contains("block")){
            dropDownElement.classList.replace("block", "hidden")
        }else{
            dropDownElement.classList.replace("hidden", "block")
        }
        
    })
})